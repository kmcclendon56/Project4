import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import './HomePage.css';

export default function HomePage() {


    const navigateAbout = () => {
        Navigate('/about');
    };

    const navigateSchedule = () => {
        Navigate('/schedule');
    };

    const navigateVideos = () => {
        Navigate('/videos');
    };

    const navigateLogin = () => {
        Navigate('/login');
    };

    return (
        <>
            <div>
                <img className="imgBackground" src={'https://i.imgur.com/SES6QxU.png'} >
                </img>
                <div class="buttons">
                    <button className="aboutButton" style={{borderRadius:'45%', backgroundColor:'red', color:'white'}}onClick={navigateAbout}>About</button>
                    <button className="scheduleButton" style={{borderRadius:'45%', backgroundColor:'red', color:'white'}}onClick={navigateSchedule}>Sched</button>
                    <button className="videosButton" style={{borderRadius:'45%', backgroundColor:'red', color:'white'}}onClick={navigateVideos}>Videos</button>
                    <button className="loginButton" style={{borderRadius:'45%', backgroundColor:'red', color:'white'}}onClick={navigateLogin}>Login</button>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}
