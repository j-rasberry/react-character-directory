import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Discover from './pages/Discover'
import Header from "./components/Global/Header";

import './Global.css'

import Login from "./pages/LoginSystem/Login";
import SignUp from "./pages/LoginSystem/SignUp";
import PasswordReset from './pages/LoginSystem/PasswordReset'

import CreateCharacter from "./pages/CreateCharacter";
import EditCharacter from "./pages/EditCharacter";
import Dashboard from './pages/Dashboard'
import Profile from './pages/ProfilePages/Profile'
import AccountSettings from './pages/ProfilePages/AccountSettings'

export default function App() {
  return (
    <div className="App">
           <link rel="preconnect" href="https://fonts.googleapis.com"/>
         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
           <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,600;0,700;1,400&display=swap" rel="stylesheet"></link>
        <Header/>
      <Routes>
        {/* public facing */}
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/sign-up" element={<SignUp />} />
           {/* private pages */}
           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/create-character" element={<CreateCharacter />} />
        <Route path="/edit-character" element={<EditCharacter />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/account-settings" element={<AccountSettings />} />


      </Routes>
    </div>
  );
}