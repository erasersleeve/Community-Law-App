import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Map from "./pages/Map"
import Login from "./pages/Login"
import Resources from "./pages/Resources";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from "./pages/LoginForm";
// import Cookie from "js-cookie";
// import Chart from "./pages/Chart";
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./style.css";
import API from "./utils/API"


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    getUser()
  },[])
  const getUser= () => {
    API.getUsers().then(response => {
      console.log(response);
      if(response.data.user){
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    })
  }

  return (
    <>
    <Router>
    
    <main className="container-fluid">
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/home" component={() => <Home loggedIn={loggedIn}/>} />
        <Route exact path="/map" component={() => <Map loggedIn={loggedIn} />} />
        <Route exact path="/resources" component={() => <Resources loggedIn={loggedIn}/>} />

    </main>
    
    </Router>
    </>
  )}

export default App;
