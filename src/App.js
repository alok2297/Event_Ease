import "./header.css";
import "./components/Header/Header";
import Header from "./components/Header/Header";
import { useState } from "react";
import Login from "./components/Authentication/Login";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  const getCity = (city) =>{
    console.log(city , "App data");
  }
  return (
    <div>
    <BrowserRouter>
      <Header getCity={getCity} />
      <Routes>
        <Route path='/' element={<HomePage/>}></Route> 
      <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
