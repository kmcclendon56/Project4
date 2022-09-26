import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
import userService from "../../utils/userService";
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
        <div>
            <div class="buttons">

                <button className="aboutButton" onClick={navigateAbout}>About</button>
                <button className="scheduleButton" onClick={navigateSchedule}>Schedule</button>
                <button className="videosButton" onClick={navigateSchedule}>Videos</button>
                <button className="loginButton" onClick={navigateSchedule}>Login</button>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </div>
        </div>
    );
}
