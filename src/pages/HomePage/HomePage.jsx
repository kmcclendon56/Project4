import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import './HomePage.css';
import ToggleStick from '../../components/ToggleStick/ToggleStick';

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
                <ToggleStick />
            </div>
            <div>
                {/* <video autoplay loop id='backgroundVideo' key="https://www.youtube.com/watch?v=l4BWKRP2tf4">
                    <source src="https://www.youtube.com/watch?v=l4BWKRP2tf4" />
                </video> */}
                {/* <div embedId="backgroundVideo">
                    <iframe
                    src="https://www.youtube.com/embed/l4BWKRP2tf4?&autoplay=1"
                    frameBorder="0"
                    allow="autoplay;"
                    />
                </div> */}
                <img className="imgBackground" src={'https://i.imgur.com/7hjKWbt.png'} >
                </img>
                <div class="buttons">
                    <button className="aboutButton" style={{ borderRadius: '45%', backgroundColor: 'red', color: 'white' }} onClick={navigateAbout}>About</button>
                    <button className="scheduleButton" style={{ borderRadius: '45%', backgroundColor: 'red', color: 'white' }} onClick={navigateSchedule}>Sched</button>
                    <button className="videosButton" style={{ borderRadius: '45%', backgroundColor: 'red', color: 'white' }} onClick={navigateVideos}>Videos</button>
                    <button className="loginButton" style={{ borderRadius: '45%', backgroundColor: 'red', color: 'white' }} onClick={navigateLogin}>Login</button>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}
