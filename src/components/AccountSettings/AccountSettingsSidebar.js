import React, { useState } from 'react';
import AccountSettingsMainContent from './AccountSettingsMainContent';
import './style/AccountSettings.css'

const AccountSettingsSidebar = () => {
    const [SettingType,setSettingType] = useState("account-detail");
    return (
        <div className='account-settings-wrapper'>
                <div className='account-settings-sidebar-wrapper'>
                <ul className='sidebar-link-list'>
                    <li>
                          <p onClick={function(){setSettingType("account-details")}}>Account Details</p>
                    </li>
                    <li>
                    <p onClick={function(){setSettingType("danger-settings")}}>Danger</p>

                    </li>
                </ul>
            </div>
            <div  className='account-settings-main-content-wrapper'>
            <AccountSettingsMainContent type={SettingType}/>

            </div>
        </div>
    );
}

export default AccountSettingsSidebar;
