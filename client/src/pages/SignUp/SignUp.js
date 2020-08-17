import React, { useEffect, useState } from "react";
import { Container } from "../../components/Grid";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Input from "../../components/Form/Input";
import FormBtn from "../../components/Form/FormBtn"
import API from "../../utils/API";
import { Redirect } from "react-router-dom";


function SignUp () {
    const [formObject, setFormObject] = useState({
        name: "",
        email: "",
        password: ""
      })
      const [redirectTo, setRedirectTo] = useState("")

      function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.name && formObject.email && formObject.password) {
            API.saveUser({
            name: formObject.name,
            email: formObject.email,
            password: formObject.password
          })


        .then(res => {
            console.log(res)
            if(res.data){
                console.log("form submitted: ",formObject)
                setRedirectTo("/login")
            } else {
                console.log("Error with sign up")
            }
            })
        .catch(err => console.log(err));


        }
      };


      // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    // console.log(formObject)
    setFormObject({...formObject, [name]: value})
    
  };
    return (
        redirectTo ? <Redirect to={redirectTo}/> :
    <Container fluid>

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
                type="password"
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
    )
}

export default SignUp;

