import React, { Component } from "react";
import {Link, BrowserRouter, Route, Switch, Routes} from 'react-router-dom'
import AboutPage from "./componentes/AboutPage.js";
import HomePage from "./componentes/HomePage.js";
import LoginPage from "./componentes/LoginPage.js";
import RegisterPage from "./componentes/RegisterPage.js";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>

      </Routes>
    </>
        
    
  );
}

export default App;
