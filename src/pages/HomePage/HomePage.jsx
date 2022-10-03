import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import './HomePage.css';
import ToggleStick from '../../components/ToggleStick/ToggleStick';
import myVideo from "../../components/Video/brianclip.mp4"



export default function HomePage() {



    return (
        <>
            <div className="homeBody">
                    
                <p className="directions">
                    Up: YouTube <br />
                    Down: Twitch<br />
                    Left: Twitter<br />
                    Right: Discord
                </p>
                <div>

                    <div id="backgroundVideo" dangerouslySetInnerHTML={{
                        __html: `
                    <video autoplay loop muted>
                    <source src=${myVideo} type="video/mp4" />
                    </video>
                    `
                    }} />

                    <img className="imgBackground" src={'https://i.imgur.com/7hjKWbt.png'} >
                    </img>
                    <div class="controls">
                        <div>
                            <ToggleStick />
                        </div>
                        <div class="buttons">
                            <a href='/about'>
                                <button className="aboutButton" style={{ borderRadius: '45%', backgroundColor: 'red', color: 'white' }}>About</button>
                            </a>
                            <a href='/videos'>
                                <button className="videosButton" style={{ borderRadius: '45%', backgroundColor: 'red', color: 'white' }}>Videos</button>
                            </a>
                            <a href='/login'>
                                <button className="loginButton" style={{ borderRadius: '45%', backgroundColor: 'red', color: 'white' }}>Login</button>
                            </a>
                            <a href='https://www.twitch.tv/vontiban/schedule'>
                                <button className="scheduleButton" style={{ borderRadius: '45%', backgroundColor: 'red', color: 'white' }}>Sched</button>
                            </a>
                            <Routes>
                                <Route path="/login" element={<LoginPage />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
