import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Discover from './pages/Discover'
import Header from "./components/Global/Header";

import './Global.css'
import CreateCharacter from "./pages/CreateCharacter";
import EditCharacter from "./pages/EditCharacter";
import Login from "./pages/LoginSystem/Login";
import SignUp from "./pages/LoginSystem/SignUp";
import Dashboard from './pages/Dashboard'
import PasswordReset from './pages/LoginSystem/PasswordReset'

export default function App() {
  return (
    <div className="App">
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

      </Routes>
    </div>
  );
}