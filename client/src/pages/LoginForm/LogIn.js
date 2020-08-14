import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import { Redirect } from "react-router-dom"; 

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirectTo, setRedirectTo] = useState("");

  const handleClick = (event) => {
    axios
      .post("/api/user/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log("Login Response: ");
        console.log(res);
        if (res.status === 200) {
        //   update App.js state
        //   this.props.updateUser({
        //     loggedIn: true,
        //     username: res.data.username,
        //   });
          // update the state to redirect to home
            setRedirectTo("/")
        }
      })
      .catch((error) => {
        console.log("Login Error: ");
        console.log(error);
      });
  };

  return (
    redirectTo ? <Redirect to={redirectTo}/> : 
    <div>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />

      <input
        type="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default LoginForm;
