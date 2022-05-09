import React from 'react'
import Test from '../Pages/NewComponent/NewComponent'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import ComponentDescription from '../Pages/ComponentDescription/ComponentDescription';
const Layout = () => {
  return (
    // navbar goes here
    <>
    {/* <Navbar /> */}
    <Router>
        <Routes>
          <Route path="/" element={<ComponentDescription />} />
          <Route path="/s" element={<Test />} />
        </Routes>       
      </Router>
    </>
    // footer goes here
 
  )
}

export default Layout