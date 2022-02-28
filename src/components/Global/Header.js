import React from 'react';
import { Link } from 'react-router-dom';
import Userfront from "@userfront/react";

import './styles/Header.css'

import Logo from './../../resources/Images/dragon.svg'
import UserUtils from './UserUtils';

const Header = () => {
    return (
        <div className='header-wrapper '>
            
            <h1 className='header-title'>Character Directory</h1>
            <Link to='/'> <img className='header-logo' src={Logo}alt='logo'/></Link>
            <nav>        
                  <Link to="/discover">Discover</Link>
      

            </nav>
        {!Userfront.accessToken() ? <UserUtils isLoggedIn= {true}/> : <UserUtils isLoggedIn= {false}/>}
        </div>
    );
}

export default Header;
