import React from "react";
import {Routes, Route} from 'react-router-dom'; 
import Home from "./pages/home/Home";
import Nav from "./components/nav/nav";
import Orders from "./pages/orders/Orders";
import Station from "./pages/station/Station";
import Stocks from "./pages/stock/Stocks";
import SignUp from "./pages/sign-up/SignUp";
import SignIn from "./pages/sign-in/SignIn";
import ForgotPassword from "./pages/forgot password/ForgotPassword";
import img_1 from "./assets/chef6.png";

function App() {
  return (
    <>
      <Nav/>
        <div className="img_container">
          <img src={img_1} alt="" />
        </div>
        
        <div className="overlay"></div>
        <Routes>   
          <Route path="/" element={<Home/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/station" element={<Station/>}/>
          <Route path="/stocks" element={<Stocks/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
        </Routes>
    </>
    
  );
}

export default App;
