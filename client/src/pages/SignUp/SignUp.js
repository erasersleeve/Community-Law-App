import React, { useEffect, useState } from "react";
import { Container } from "../../components/Grid";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";


import "./index.css";
import axios from "axios";
import { Redirect } from "react-router-dom";


function SignUp(){

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [redirectTo, setRedirectTo] = useState("")

function SignUp () {
    const [formObject, setFormObject] = useState({
        name: "",
        email: "",
        password: ""
      })

      function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.name && formObject.email && formObject.password) {
            API.saveUser({
            name: formObject.name,
            email: formObject.email,
            password: formObject.password
          })
            .then(console.log("form submitted: ",formObject))
            .catch(err => console.log(err));
        }
      };

    const handleSubmit=() => {
        console.log("sign-up-form, username: ");
        console.log(username);
        // REQUEST TO SERVER GOES HERE
        axios.post("/api/user/signup", {
            name: name,
            username: username,
            password: password
        })
        .then(res => {
            console.log(res)
            if(res.data){
                console.log("Sign up is successful")
                setRedirectTo("/login")
            } else {
                console.log("Error with sign up")
            }
        }).catch(error => {
            console.log("Sign up server error: ")
            console.log(error);
        })
    }


      // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    // console.log(formObject)
    setFormObject({...formObject, [name]: value})
    
  };
    return (
       redirectTo ? <Redirect to={redirectTo}/> : 
    <div>
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
        <NavBar />

        <form>
              <Input
                onChange={handleInputChange}
                name="name"
                placeholder="Username"
                value={formObject.name}
              />
              <Input
                onChange={handleInputChange}
                name="email"
                placeholder="email"
                value={formObject.email}
              />
              <Input
                onChange={handleInputChange}
                name="password"
                placeholder="password"
                value={formObject.password}
              />
              <FormBtn
                disabled={!formObject.name && formObject.email && formObject.password}
                onClick={handleFormSubmit}
              >
                Register!
              </FormBtn>
            </form>
        <Footer />
    </Container>

        <button onClick={handleSubmit}>Login</button>
    </div>

    )
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
