import React from 'react';
import { useEffect } from 'react';
import { gapi } from 'gapi-script'
import { Button } from 'semantic-ui-react';

export default function Videos() {
    let videoList = {}
    const authenticate = () => {
        console.log("Authenticating")
        return gapi.auth2.getAuthInstance()
            .signIn({ scope: "https://www.googleapis.com/auth/youtube.readonly" })
            .then(function () { console.log("Sign-in successful"); },
                function (err) { console.error("Error signing in", err); })
            .finally(loadClient());
    }
    function loadClient() {
        console.log("Loading")
        gapi.client.setApiKey('AIzaSyD74LzH22H2C9X3BVHs0QAunwrsKLKLDvM'); //might not need quotes around api key
        return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
            .then(function () { console.log("GAPI client loaded for API"); },
                function (err) { console.error("Error loading GAPI client for API", err); });
    }
    // Make sure the client is loaded and sign-in is complete before calling this method.
    function execute() {
        console.log("Executing")

        return gapi.client.youtube.playlistItems.list({
            "part": [
                "snippet"
            ],
            "maxResults": 50,
            "pageToken": "EAAaBlBUOkNESQ",
            "playlistId": "UUC6VdgJANZFwWexul6jGVag"
        })
            .then(function (response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
            },
                function (err) { console.error("Execute error", err); });
    }

    // Look up how to do this only once i.e. onLoad, onPageLoad, onPageAppear something
    useEffect(() => {
        // Use the above functions to call the api and set the value of videos.
        gapi.load("client:auth2", function () {
            console.log("Initializing")
            gapi.auth2.init({ client_id: "870243633961-afbpjhtrnldlvhnejeioehel05b50muj.apps.googleusercontent.com" });
            console.log("Initializing Done")
            // authenticate().then(loadClient);
        })
        
        // const result = execute()
        console.log('HI')
        // console.log(result);
        
    });

    return (
        <>
        <p style={{color: 'red'}}> Hello </p>
        <Button style={{color: 'red'}} onClick={authenticate}>Test Button</Button>
        {/* <Button onClick={authenticate.then(loadClient)}>authorize and load</Button> */}
        {/* <Button onClick={execute}>execute</Button> */}
        {/* {videoList.map((item) => {
            return (
                <p>
                    {item.snippet.thumbnail.default.url}
                    {item.snippet.title}
                </p>
            )
        })} */}
        </>
    );

}



// {posts.map((post) => {
//           return (
//             <PostCard
//               post={post}
//               key={post._id}
//               isProfile={isProfile}
//               removeLike={removeLike}
//               addLike={addLike}
//               loggedUser={loggedUser}
//             />
//           );
//         })}
