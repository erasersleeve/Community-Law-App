import React from "react";
import "./index.css";

const LoginForm = () => {
    return (
        <div>
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <button>Login</button>
        </div>
    )
}

export default LoginForm;