import React from 'react';

import UserfrontCore from "@userfront/core";
import Userfront from "@userfront/react";
import AccountSettingsSidebar from '../../components/AccountSettings/style.css/AccountSettingsSidebar';
import AccountSettingsMainContent from '../../components/AccountSettings/AccountSettingsMainContent';
Userfront.init("xbpmprzn");


const AccountSettings = () => {
    return (
        <div className='account-settings-wrapper'>
            <AccountSettingsSidebar/>
            {/* <AccountSettingsMainContent/> */}
        </div>
    );
}

export default AccountSettings;
