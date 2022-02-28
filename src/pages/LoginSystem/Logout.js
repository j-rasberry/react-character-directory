import React from 'react';
import Userfront from "@userfront/react";

Userfront.init("xbpmprzn");

const LogoutButton = Userfront.build({
  toolId: "looodl"
});


const Logout = () => {
    return <LogoutButton />
}

export default Logout;

