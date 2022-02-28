import React from 'react';
import {Navigate} from 'react-router-dom'
import Userfront from "@userfront/react";

import { useState, useEffect } from 'react';

const Dashboard = () => {
const [privateData, setPrivateData] = useState();
    useEffect(() => {
        (async () => {
            try{
                const result = await fetch('http://localhost:3001/data',
                {
                    headers:{
                    authorization: `Bearer ${Userfront.accessToken()}`,
                }})
                .then(response => response.json());
                setPrivateData(result);
            }catch(error){
                console.log(error);
                
            }
        })();
    },[]);

     if(!Userfront.accessToken()){
         
         return(
        <Navigate to="/login" /> 
            )
     }

     const UserData = JSON.parse(atob(Userfront.accessToken().split('.')[1]))
    return(
        <div>
         
            <pre>{JSON.stringify(privateData,null,2)}</pre>
            <pre>{JSON.stringify(UserData,null,2)}</pre>
            <pre>{JSON.stringify(Userfront.user,null,2)}</pre>
            <h1>Welcome {Userfront.user.name}</h1>


        </div>
    )};


export default Dashboard;
