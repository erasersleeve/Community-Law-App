import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Card, Button, Container, NavBar } from "react-bootstrap";
// import NavBar from "react-bootstrap";

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
          setRedirectTo("/");
        }
      })
      .catch((error) => {
        console.log("Login Error: ");
        console.log(error);
      });
  };

  return redirectTo ? (
    <Redirect to={redirectTo} />
  ) : (
    <div>
      <Container fluid>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </Card.Text>
            <Card.Text>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </Card.Text>
            <Button variant="primary" onClick={handleClick}>
              Login
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default LoginForm;
