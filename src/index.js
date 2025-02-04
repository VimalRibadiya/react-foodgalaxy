import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Service from "./components/Service";
import Team from "./components/Team";
import { Routes, Route, HashRouter } from "react-router-dom";
import Contact_us from "./components/Contact_us";
import Shop_main from "./components/Shop_main";
import Shop_details from "./components/Shop_details";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <HashRouter >
      <Header />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/components/Service" element={ <Service/> } />
        <Route path="/components/About" element={ <About/> } />
        <Route path="/components/Team" element={ <Team/> } />
        <Route path="/components/Contact_us" element={ <Contact_us/> } />
        <Route path="/components/Shop_main" element={ <Shop_main/> } />
        <Route path="/components/Shop_details" element={ <Shop_details/> } />
      </Routes>
      <Footer />
    </HashRouter>
  </>
);
