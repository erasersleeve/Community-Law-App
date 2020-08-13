import React from "react";
import "./index.css";
import axios from "axios";

const LoginForm = () => {
    
    const handleClick=(event) => {
    axios
        .post("/user/login", {
            username: this.StaticRange.username,
            password: this.StaticRange.password
        })
        .then(res => {
            console.log("Login Response: ")
            console.log(res)
            if (res.state === 200){
                //update App.js state
                this.props.updateUser({
                    loggedIn: true,
                    username: res.data.username
                })
                // update the state to redirect to home
                this.setState({
                    redirectTo: "/"
                })
            }
        }).catch(error => {
            console.log("Login Error: ")
            console.log(error);
        })
    }

    return (
        <div>
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <button>Login</button>
        </div>
    )
}

export default LoginForm;