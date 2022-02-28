import React from 'react';
import { Navigate } from 'react-router-dom';
import Userfront from "@userfront/react";

import BasicCharacterInfo from '../components/CreateCharacter/BasicCharacterInfo';




const CreateCharacter = () => {

    if(!Userfront.accessToken()){
         
        return(
       <Navigate to="/login" /> 
           )
    }
    return (
        <div>
            <BasicCharacterInfo/>
            {/* <ModularCharacterInfo/>
            <SaveManageButtons/> */}
            
        </div>
    );
}

export default CreateCharacter;
