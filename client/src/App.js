import React from "react";
import Nav from "./components/Nav";
import SignUp from "./pages/SignUp";
import { Link } from "react-router-dom"; //??????? WHAT SHOULD BE IMPORTED?


function App() {
  return (
    <div>
      <Nav />
      <SignUp />
    </div>
  );
}

export default App;
