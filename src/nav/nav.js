import React, { useState } from 'react';
import {IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import Choose from '../choose/choose';




function Nav(){
    const navigate=useNavigate();
    function compare(){
     navigate("/choose")
    }
    function home(){
        navigate("/")
    }
    return(
        <>
            <nav>
                <div className="image">
                    <img src="data:image/png;base64,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" alt="no image"></img>
                </div>
                <div>
                    <ul id="navbar">
                        <li onClick={()=>home()}>HOME</li>
                        <li onClick={()=>compare()}>COMPARE CARS</li>
                        <li>REVIEWS&NEWS</li>
                    </ul>
                </div>
                <div className="input">
                    <input type="text" placeholder="search"></input>
                    <SearchIcon/>
                </div>
                <div className='muiicon'>
                <IconButton  >
                    <LocationOnIcon/>
                </IconButton>
                <IconButton >
                    <GTranslateIcon/>
                </IconButton>
                <IconButton >
                    <AccountCircleIcon/>
                </IconButton>
                
                </div>
                {/* <div id="mobile">
                    <i class="fa fa-bars"></i>
                </div> */}
            </nav>
        </>
    )
}

export default Nav;