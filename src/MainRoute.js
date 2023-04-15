import React from 'react'
import Home from './Home'
import NavbarReact from './NavbarReact'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

const MainRoute = (props) => {
  return (
    <BrowserRouter>
        <NavbarReact 
          user={props.user}
        />
        <Routes>
            <Route path="/" element={<Home user={props.user} />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
        </Routes>
    </BrowserRouter>
  )
}

export default MainRoute