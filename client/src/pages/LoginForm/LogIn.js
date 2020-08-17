import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";
import FormBtn from "../../components/Form/FormBtn";
import Input from "../../components/Form/Input";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer"
// import NavBar from "react-bootstrap";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectTo, setRedirectTo] = useState("");

  const handleClick = (event) => {
    axios
      .post("/api/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log("Login Response: ");
        console.log(res);
        if (res.status === 200) {
          //   update App.js state
          //   this.props.updateUser({
          //     loggedIn: true,
          //     email: res.data.email,
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
        <NavBar />
        <form>
              <Input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            <FormBtn variant="primary" onClick={handleClick}>
              Login
            </FormBtn>
        </form>
        <Footer />
      </Container>
    </div>
  );
};

export default LoginForm;

{/* //   <Container fluid>
    //     <NavBar />
    //     <form>
    //       {/* <Input
    //         onChange={handleInputChange}
    //         name="name"
    //         placeholder="Username"
    //         value={formObject.name}
    //       /> */}
    {/* //       <Input */}
    {/* //         onChange={handleInputChange}
    //         name="email"
    //         placeholder="email"
    //         value={formObject.email}
    //       />
    //       <Input */}
    {/* //         onChange={handleInputChange}
    //         type="password"
    //         name="password"
    //         placeholder="password"
    //         value={formObject.password}
    //       />
    //       <FormBtn */}
    {/* //         disabled={ */}
    {/* //           !formObject.name && formObject.email && formObject.password
    //         }
    //         onClick={handleFormSubmit}
    //       >
    //         Register!
    //       </FormBtn> */}
    {/* //     </form> */}
    {/* //     <Footer />
    //   </Container> */} 