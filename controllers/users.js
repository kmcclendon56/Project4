const User = require("../models/user");
const Post = require("../models/post");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3(); // initate the S3 constructor which can talk to aws/s3 our bucket!
// import uuid to help generate random names
const { v4: uuidv4 } = require("uuid");
// since we are sharing code, when you pull you don't want to have to edit the
// the bucket name, thats why we're using an environment variable
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;

module.exports = {
  signup: signup, // long way
  login, // <- shorthand
  profile,
};

async function profile(req, res) {
  try {
    // find the user!
    const user = await User.findOne({ username: req.params.username });
    // if the user is undefined, that means the database couldn't find this user lets send an error back
    if (!user) return res.status(404).json({ error: "User not found" });

    // Find the Post's by the user
    //.populate('user') <- user comes from the key on the post model 
    //   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}, // referencing a model < which replaces the id with the userdocument
    const posts = await Post.find({ user: user._id }).populate("user").exec();
    res.status(200).json({
      data: {
        user: user,
        posts: posts,
      }
    });
  } catch (err) {
    console.log(err.message, " <- profile controller");
    res.status(400).json({ error: "Something went wrong" });
  }
}

async function signup(req, res) {
  console.log(req.body, " req.body in signup", req.file);

  if (!req.file) return res.status(400).json({ error: "Please submit Photo!" });
  // Create the key that we will store in the s3 bucket name
  // pupstagram/ <- will upload everything to the bucket so it appears
  // like its an a folder (really its just nested keys on the bucket)
  const key = `Vontiban/${uuidv4()}-${req.file.originalname}`;
  const params = { Bucket: BUCKET_NAME, Key: key, Body: req.file.buffer };

  s3.upload(params, async function (err, data) {
    // this function is called when we get a response from AWS
    // inside of the callback is a response from AWS!
    console.log("========================");
    console.log(err, " <--- err from aws");
    console.log("========================");
    if (err)
      return res.status(400).json({
        err: "Error from aws, check the server terminal!, you bucket name or keys are probley wrong",
      });

    // data.Location <- should be the say as the key but with the aws domain
    // its where our photo is hosted on our s3 bucket
    const user = new User({ ...req.body, photoUrl: data.Location });
    try {
      await user.save();
      const token = createJWT(user);
      res.json({ token }); // shorthand for the below
      // res.json({ token: token })
    } catch (err) {
      if (err.name === "MongoServerError" && err.code === 11000) {
        console.log(err.message, "err.message");
        res
          .status(423)
          .json({
            errorMessage: err,
            error: `${identifyKeyInMongooseValidationError(
              err.message
            )} Already taken!`,
          });
      } else {
        res.status(500).json({
          error: err,
          message: "Internal Server Error, Please try again",
        });
      }
    }
  });
}

async function login(req, res) {
  try {
    // req.body.email, is the email from the form
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(401).json({ err: "bad credentials" });
    // comparePassword is coming from the user Model,
    // this function will tell us if the password was correct
    // isMatch will be true if the password is correct
    // isMatch will be false if the password is incorrect
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        // if the passwords do match,
        // create our jwt, with the users information
        // toJSON in our model will delete the password for us
        const token = createJWT(user);
        res.json({ token }); // send the token back to the client
        // shorthand ^ for below
        // res.json({ token: token })
      } else {
        // if the passwords don't match we send back bad crendentials
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(401).json({ err });
  }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    SECRET, // stored on server, and is environment variable
    { expiresIn: "24h" }
  );
}

function identifyKeyInMongooseValidationError(err) {
  let key = err.split("dup key: {")[1].trim();
  key = key.slice(0, key.indexOf(":"));
  return key.replace(/^./, (str) => str.toUpperCase());
}
