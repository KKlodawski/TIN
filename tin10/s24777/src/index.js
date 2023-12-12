import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Stylesheet/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from "./Pages/Navbar";
import PhoneList from "./Pages/PhoneList";
import Phone from "./Pages/Phone";
import PhoneAdd from "./Pages/PhoneAdd";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <div className="nav">
      <Navbar/>
      </div>
      <div className="content">
      <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/phonelist" element={<PhoneList/>} />
          <Route path="/phonelist/:id" element={<Phone/>} />
          <Route path="/phoneAdd" element={<PhoneAdd/>} />
      </Routes>
      </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
