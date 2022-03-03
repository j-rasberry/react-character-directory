import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import AccountSettingsMainContent from '../AccountSettingsMainContent';


const AccountSettingsSidebar = () => {
    return (
        <div>
                 <Routes>
 
        <Route path="/user-info" element={<AccountSettingsMainContent type="user-info" />} />
        <Route path="/security" element={<AccountSettingsMainContent type="security" />} />

  


      </Routes>
                <div className='account-settings-sidebar-wrapper'>
                <ul>
                    <li>
                          <Link to="/user-info">UserInfo</Link>
                    </li>
                    <li>
                            <h1>Public Account Info</h1>
                    </li>
                    <li>
                            <h1>Public Account Info</h1>
                    </li>
                    <li>
                            <h1>Public Account Info</h1>
                    </li>
                    <li>
                            <h1>Public Account Info</h1>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AccountSettingsSidebar;
