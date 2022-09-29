import React, { useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import './HomePage.css';
import ToggleStick from '../../components/ToggleStick/ToggleStick';



export default function HomePage() {


    const navigateAbout = () => {
        Navigate('/about');
    };

    const navigateVideos = () => {
        Navigate('/videos');
    };

    const navigateLogin = () => {
        Navigate('/login');
    };

    function AboutButton() {
        const navigate = useNavigate();
        function handleClick() {
          navigate.push("/about");
        }
      }

      function VideoButton() {
        const navigate = useNavigate();
        function handleClick() {
          navigate.push("/video");
        }
      }


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
                    <a href='/about'>
                    <button className="aboutButton" style={{ borderRadius: '45%', backgroundColor: 'red', color: 'white', fontSize: '13px' }}>About</button>
                    </a>
                    <a href='/videos'>
                    <button className="videosButton" style={{ borderRadius: '45%', backgroundColor: 'red', color: 'white', fontSize: '13px' }}>Videos</button>
                    </a>
                    <a href='/login'>
                    <button className="loginButton" style={{ borderRadius: '45%', backgroundColor: 'red', color: 'white', fontSize: '13px' }}>Login</button>
                    </a>
                    <a href='https://discord.gg/G6PT5GkpYE'>
                    <button className="discordButton" style={{ borderRadius: '45%', backgroundColor: 'red', color: 'white', fontSize: '13px'}}>Discord</button>
                    </a>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}
