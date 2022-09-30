import React from 'react';
import { useEffect, useState } from 'react';
import { gapi } from 'gapi-script'
import { Card } from 'semantic-ui-react';

export default function Videos() {
    const [videoList, setVideoList] = useState({});

    function loadClient() {
        console.log("Loading")
        gapi.client.setApiKey(process.env.API_KEY);
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

    // Look up how to do this only once i.e. onLoad, onPageLoad, onPageAppear something
    useEffect(() => {
        gapi.load("client:auth2", function () {
            console.log("Initializing")
            gapi.auth2.init({ client_id: "870243633961-afbpjhtrnldlvhnejeioehel05b50muj.apps.googleusercontent.com" })
                .then(loadClient).then(execute);
            console.log("Initializing Done")
        })
        console.log('HI')
        console.log(videoList);

    }, []);

    useEffect(() => {
        console.log("Reloaded");
    })

    return (
        <>
            {videoList.map ? videoList.map((item) => {
                return (
                    <>
                        <Card style={{ backgroundColor: 'black', width: '300px', height: '270px' }}>
                            <Card.Content>
                                <div style={{ color: 'white' }}>

                                    <a href={"https://www.youtube.com/watch?v=" + item.snippet.resourceId.videoId}>
                                    <img style={{ width: '150px', height: '150px', marginLeft:'4rem' }} src={item.snippet.thumbnails.default.url}></img>
                                    </a>
                                    <Card.Header textAlign='center'>{item.snippet.title}</Card.Header>
                                </div>
                            </Card.Content>
                        </Card>
                    </>
                )
            }) : null}
        </>
    );
}

