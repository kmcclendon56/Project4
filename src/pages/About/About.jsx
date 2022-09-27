import React from "react";
import PageHeader from "../../components/Header/Header";
import { Grid } from "semantic-ui-react";

export default function About() {
    return (
        <>
            <PageHeader />
            <Grid
                textAlign="center"
                style={{ height: "100vh", width: "100vw" }}
                verticalAlign="middle">
                <h3>Hello! I'm VonTiban ("vaughn-thai-ben"), I'm a lifelong gamer who has been very passionate about learning Tekken 7 since 2018.
                    This channel is primarily a video documentation of my journey to improve in the game and hopefully become one of the best Bryan Fury players. <br />
                    I also have a masochistic streak and enjoy sharing my suffering in Soulsborn and Resident Evil games. Come join my ranked streams with Bryan and laugh at my cowardice in horror games!<br />
                    Stream Schedule:
                    Thursdays 8:45pm-10:45pm CT, Variety Stream
                    Saturdays 9:00am-11:am CT, Tekken 7 Ranked
                    Sundays 9:00am-11:am CT, Tekken 7 Ranked</h3>
            </Grid>
        </>
    );
}