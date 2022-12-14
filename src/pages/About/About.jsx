import React from "react";
import PageHeader from "../../components/Header/Header";
import "./About.css";

export default function About({ loggedUser, handleLogout }) {
    return (
        <>
            <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
            <div className="about" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '50vh',
                color: 'white'
            }}>
                <div className="border" style={{
                    position: "absolute",
                    border: "solid white",
                    height: "50vh",
                    width: "110vh", //change border and text color
                }}>
                </div>
                Hello! I'm VonTiban ("vaughn-thai-ben"), I'm a lifelong gamer who has been very passionate about learning Tekken 7 since 2018.<br />
                This channel is primarily a video documentation of my journey to improve in the game and hopefully become one of the best Bryan Fury players. <br />
                I also have a masochistic streak and enjoy sharing my suffering in Soulsborn and Resident Evil games. <br />Come join my ranked streams with Bryan and laugh at my cowardice in horror games!<br /><br />
                Stream Schedule:<br />
                Thursdays 8:45pm-10:45pm CT, Variety Stream<br />
                Saturdays 9:00am-11:am CT, Tekken 7 Ranked<br />
                Sundays 9:00am-11:am CT, Tekken 7 Ranked<br />
            </div>

        </>
    );
}

