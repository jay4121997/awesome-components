import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Navbar from '../components/NavBar/Navbar';
import ComponentDescription from '../Pages/ComponentDescription/ComponentDescription';
const Layout = () => {
  return (
    // navbar goes here
    <>
    {/* <Navbar /> */}
    <Router>
        <Routes>
          <Route path="/" element={<ComponentDescription />} />
        </Routes>       
      </Router>
    </>
    // footer goes here
 
  )
}

export default Layout