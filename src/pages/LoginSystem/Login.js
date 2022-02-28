import React from 'react';
import Userfront from "@userfront/react";

Userfront.init("xbpmprzn");

const LoginForm = Userfront.build({
  toolId: "blllmm"
});


const Login = () => {
    return <LoginForm />
}

export default Login;

