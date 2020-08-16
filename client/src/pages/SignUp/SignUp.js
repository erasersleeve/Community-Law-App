import React, { useEffect, useState } from "react";
import { Container } from "../../components/Grid";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./index.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirectTo, setRedirectTo] = useState("");

  const handleSubmit = () => {
    console.log("sign-up-form, username: ");
    console.log(username);
    // REQUEST TO SERVER GOES HERE
    axios
      .post("/api/user/signup", {
        name: name,
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
        if (res.data) {
          console.log("Sign up is successful");
          setRedirectTo("/login");
        } else {
          console.log("Error with sign up");
        }
      })
      .catch((error) => {
        console.log("Sign up server error: ");
        console.log(error);
      });
  };

  return redirectTo ? (
    <Redirect to={redirectTo} />
  ) : (
    <div>
      {/* <NavBar />
        <input
        type="text"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        />

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
        

        <button onClick={handleSubmit}>Login</button> */}
      <Container fluid>
        <NavBar />

        <form>
          {/* <Input
            onChange={handleInputChange}
            name="name"
            placeholder="Username"
            value={formObject.name}
          /> */}
          <Input
            onChange={handleInputChange}
            name="email"
            placeholder="email"
            value={formObject.email}
          />
          <Input
            onChange={handleInputChange}
            type="password"
            name="password"
            placeholder="password"
            value={formObject.password}
          />
          <FormBtn
            disabled={
              !formObject.name && formObject.email && formObject.password
            }
            onClick={handleFormSubmit}
          >
            Register!
          </FormBtn>
        </form>
        <Footer />
      </Container>
    </div>
  );
}

export default SignUp;

// function SignUp () {

//     return (
//     <Container fluid>

//         <Navbar />

//         <Footer />
//     </Container>
//     )
// }

// export default SignUp;
