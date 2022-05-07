import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Layout = () => {
  return (
    // navbar goes here
    <Router>
        <Switch>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
        </Switch>       
    </Router>
    // footer goes here
  )
}

export default Layout