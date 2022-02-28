import React from 'react';
import Userfront from "@userfront/react";

Userfront.init("xbpmprzn");

const PasswordResetForm = Userfront.build({
  toolId: "krrrlk"
});


const Passwordreset = () => {
    return <PasswordResetForm />
}

export default Passwordreset;
