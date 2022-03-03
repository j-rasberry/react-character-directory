import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './../../pages/LoginSystem/Logout'
import Userfront from "@userfront/react";

import './styles/UserUtils.css'
import DownArrow from './../../resources/Images/downarrow.svg'


const UserUtils = (props) => {
    return (

        <div className='user-utils-wrapper'>
            <div className='user-utils-login-wrapper'>
                { props.isLoggedIn &&
                <div className='login-button-wrapper'>
                    <Link className='login-buttons' id='login-button-login' to="/login">Login</Link>
                    <Link className='login-buttons' id="login-button-sign-up" to="/sign-up">Sign Up</Link>
                </div>
                   }
        </div>
            
         
            {!props.isLoggedIn &&     
            <div className='user-utils-profile-info-wrapper'>
                <div>
                </div>
                <div className='user-header-wrapper'>
                    <img className='user-header-img' src={Userfront.user.image} alt="user profile"/>
                    <p>{Userfront.user.username}</p>
                    <img className='settings-dropdown-img' src={DownArrow} alt='settings dropdown' onClick={showSettings}></img>

                </div>
                
                
                <div className='settings-dropdown' id='settings-dropdown' hidden>
                    <Link to="/profile">Profile</Link>
                    <Link to="/account-settings">Account Settings</Link>
                    <Link to="/dashboard">Dashboard</Link>
                <LogoutButton/>

                </div>
            </div>
        }
        
        </div>
        
    );
}

function showSettings(){
    if(document.getElementById('settings-dropdown').hidden){
        document.getElementById('settings-dropdown').hidden = false;
    }else{
        document.getElementById('settings-dropdown').hidden = true;
    }
}

export default UserUtils;
