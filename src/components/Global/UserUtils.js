import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './../../pages/LoginSystem/Logout'
import Userfront from "@userfront/react";


const UserUtils = (props) => {
    return (
        <div>{props.isLoggedIn &&
                    <div className='login-button-wrapper'>
            <Link className='login-button-login' to="/login">Login</Link>
            <Link className='login-button-sign-up' to="/sign-up">Sign Up</Link>
            </div>}
            {!props.isLoggedIn &&     <div>
                <Link to="/create-character">Create</Link>
                  <Link to="/edit-character">Edit</Link>
                <LogoutButton/>
                <img src={Userfront.user.image} alt="user profile"/></div>
        }</div>
        
    );
}

export default UserUtils;
