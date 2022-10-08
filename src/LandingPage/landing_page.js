import React from 'react';
import landimage from '../images/banner.png'
import './landing_page.css';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';

const LandingPage = ()=> {
    return(
        <div className='main'>
            <div>
                <img src={landimage}/>
            </div>
            <div className='heading'>
                <h1>Instaclone</h1>
                <button>

                <Link to="/postview" style={{"textAlign":"center"}}>Enter</Link>
                </button>
            </div>

        </div>
    )
}

export default LandingPage;