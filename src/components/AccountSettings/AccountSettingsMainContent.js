import React from 'react';
import Userfront from "@userfront/react";


const AccountSettingsMainContent = (props) => {
    let type = props.type;
    function accountMainContentSwitch(type){
    switch(type){
        case "account-details":
            return <AccountDetails/>
        case "danger-settings":
            return <DangerSettings/>
    }}
    return (
        <div>
            {accountMainContentSwitch(props.type)}

        </div>
    );
}

function AccountDetails(){
    return(
        <div>
            <p>Change username</p>
            <h1>{Userfront.user.username}</h1>
           
           <form>
               <label>
                   name:
                   <input type="text" placeholder="New Username"></input>
               </label>
               <label>
                   password:
                   <input type="password" placeholder="Current Password"></input>
               </label>
           </form>
           <br></br>
           <form>
               <label>Change Password:
               </label>
               <input placeholder='Current Password' type="password"></input>
               <input placeholder='New Password' type="password"></input>
               <input placeholder='Confirm Password' type="password"></input>
               
           </form>
        </div>
    )
}
function DangerSettings(){
    return(
        <div>
            <h1>This is an area you should not be in.</h1>
            <form>
                <input type='button' value='Delete Account'></input>
            </form>
        </div>
    )
}

export default AccountSettingsMainContent;
