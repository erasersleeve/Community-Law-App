import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Map from "./pages/Map"
import Login from "./pages/Login"
import Resources from "./pages/Resources";
// import Chart from "./pages/Chart";
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./style.css";

function App() {
  return (
    <>
    <Router>
         
    <main className="container-fluid">
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/resources" component={Resources} />
    </main>
    
    </Router>
    </>
  )}

export default App;
