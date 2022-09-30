const User = require("../models/user");
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
  hello,
};

async function hello() {
  console.log("Hi friends");
}


async function signup(req, res) {
  console.log("Hello")
  console.log(
    "This is an item: ",
    req.forEach((item) => console.log(item)),
    " < This lets you see the key values in formData"
  );
  // console.log(req);
  console.log(req.body);



  // data.Location <- should be the say as the key but with the aws domain
  // its where our photo is hosted on our s3 bucket
  const user = new User({ ...req.body});
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
