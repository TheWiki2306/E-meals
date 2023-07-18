import React from "react";
import {Routes, Route} from 'react-router-dom'; 
import Nav from "./components/nav/nav";
import Orders from "./pages/orders/Orders";
import Station from "./pages/station/Station";
import Stocks from "./pages/stock/Stocks";
import SignUp from "./pages/sign-up/SignUp";
import SignIn from "./pages/sign-in/SignIn";
import ForgotPassword from "./pages/forgot password/ForgotPassword";

function App() {
  return (
    <>
    <Nav/>
   <Routes>   
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
