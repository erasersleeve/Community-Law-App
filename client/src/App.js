import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Map from "./pages/Map"
import Login from "./pages/Login"
import Resources from "./pages/Resources";
import Chart from "./pages/Chart";
import LoginForm from "./pages/LoginForm"

function App() {
  return (
    <Router>
         
    <main className="container-md">
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/resources" component={Resources} />
        {/* {this.state.loggedIn &&
          <p>Join the party, {this.state.username}!</p>
        } */}
    </main>
    
</Router>
  )}

export default App;
