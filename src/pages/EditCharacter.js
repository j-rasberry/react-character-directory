import React from 'react';
import Userfront from "@userfront/react";
import { Navigate } from 'react-router-dom';

const EditCharacter = () => {
    if(!Userfront.accessToken()){
         
        return(
       <Navigate to="/login" /> 
           )
    }
    return (
        <div>
            <button> delete Character</button>
        </div>
    );
}

export default EditCharacter;
