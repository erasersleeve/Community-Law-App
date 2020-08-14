import React, { useEffect, useState } from "react";
import { Container } from "../../components/Grid";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";




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

      // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    // console.log(formObject)
    setFormObject({...formObject, [name]: value})
    
  };
    return (
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


