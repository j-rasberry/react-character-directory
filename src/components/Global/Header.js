import React from 'react';
import { Link } from 'react-router-dom';
import Userfront from "@userfront/react";

import './styles/Header.css'

import Logo from './../../resources/Images/dragon.svg'
import UserUtils from './UserUtils';

const Header = () => {
    return (
        <div className='header-wrapper '>
            <div className='header-info'>
                <h1 className='header-title'>Character Directory</h1>
                <Link to='/'> <img className='header-logo' src={Logo}alt='logo'/></Link>
            </div>
            <div>
            <Link className='nav-button' to="/discover">Discover</Link>
            <Link className='nav-button' to="/create-character">Create</Link>

            </div>
            <nav>        
      
                  {!Userfront.accessToken() ? <UserUtils isLoggedIn= {true}/> : <UserUtils isLoggedIn= {false}/>}

            </nav>
        </div>
    );
}

export default Header;
