import "./App.css";

import styled from "styled-components";
import React, { useEffect, useState } from "react";

import UserNav from "./components/UserNav";
import Navigation from "./components/Navigation";

import "bootstrap/dist/css/bootstrap.min.css";

import { Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Running from "./pages/Running";
import Bike from "./pages/Bike";
import Profile from "./pages/user/Profile";
import Login from "./pages/user/Login";
import Registration from "./pages/user/Registration";
import ForgotPassword from "./pages/user/ForgotPassword";
function App() {
  // const [user, setUser] = useState(null);

  //zmiana motywu
  const [dark, setDark] = useState();

  return (
    <div className={dark === true ? "App-dark" : "App"}>
      <UserNav dark={dark} setDark={setDark} />
      <Navigation dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bike" element={<Bike />} />
        <Route path="/running" element={<Running />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
      <Footer>
        <p>Obraz autorstwa rawpixel.com na Freepik</p>
        <p>created by MR</p>
      </Footer>
    </div>
  );
}

export default App;

const Footer = styled.div`
  text-align: center;
  margin: 2rem;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);

  width: 90%;

  * {
    margin: 1rem;
  }
`;
