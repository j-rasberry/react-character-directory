import React from 'react';
import Userfront from "@userfront/react";

Userfront.init("xbpmprzn");

const SignupForm = Userfront.build({
  toolId: "rlllmo"
});

const SignUp = () => {
    return (
  
            <SignupForm />
      
    );
}

export default SignUp;

