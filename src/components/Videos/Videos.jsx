import React from 'react';
import { useEffect, useState } from 'react';
import { gapi } from 'gapi-script'
import { Button } from 'semantic-ui-react';

export default function Videos() {
    const [videoList, setVideoList] = useState({});

    const authenticate = () => {
        console.log("Authenticating")
        return gapi.auth2.getAuthInstance()
            .signIn({ scope: "https://www.googleapis.com/auth/youtube.readonly" })
            .then(function () { console.log("Sign-in successful"); },
                function (err) { console.error("Error signing in", err); });
    }
    function loadClient() {
        console.log("Loading")
        gapi.client.setApiKey('AIzaSyD74LzH22H2C9X3BVHs0QAunwrsKLKLDvM');
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
                setVideoList(response.result.items);
            },
                function (err) { console.error("Execute error", err); });
    }

    async function showVideos() {
        await authenticate()
        await loadClient()
        await execute();
    }

    // Look up how to do this only once i.e. onLoad, onPageLoad, onPageAppear something
    useEffect(() => {
        // Use the above functions to call the api and set the value of videos.
        gapi.load("client:auth2", function () {
            console.log("Initializing")
            gapi.auth2.init({ client_id: "870243633961-afbpjhtrnldlvhnejeioehel05b50muj.apps.googleusercontent.com" });
            console.log("Initializing Done")
        })
        

        console.log('HI')
        console.log(videoList);

    });

    useEffect(() => {
        console.log("Reloaded");
    })

    return (
        <>
        <Button style={{color: 'red'}} onClick={showVideos}>Show Videos</Button>

        { videoList.map ? videoList.map((item) => {
            return (
                <div>
                    <p style={{color: 'red'}}>
                        {/* {item.snippet.thumbnails.default.url} */}
                        {item.snippet.title}
                    </p>
                    <a href={"https://www.youtube.com/watch?v=" + item.snippet.resourceId.videoId}>
                    <img src={item.snippet.thumbnails.default.url}></img>
                    </a>
                </div>
            )
        }) : null }
        </>
    );

}