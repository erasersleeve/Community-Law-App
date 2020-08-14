import React from "react";
import styled from 'styled-components';

function SignInForm () {


    return (
        
            <form class="signin">
            
                <div class="form-group">
                    <label for="inputName1">Username</label>
                    <input type="email" class="form-control" id="user-input" placeholder="Username" />
                    <div id="userErrorContainer"></div>
                </div>

                <div class="form-group">
                    <label for="inputEmail1">Email address</label>
                    <input type="email" class="form-control" id="email-input" placeholder="Email" />
                    <div id="emailErrorContainer"></div>
                </div>
            
                <div class="form-group">
                    <label for="inputPassword1">Password</label>
                    <input type="password" class="form-control" id="password-input" placeholder="Password" />
                    <div id="passErrorContainer"></div>
                </div>
               
                <div style="display: none" id="alert" class="alert alert-danger" role="alert">
                    <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    <span class="sr-only">Error:</span> <span class="msg"></span>
                </div>
               
                <center>
                    <button type="submit" class="btn btn-default mt-4 mb-2">Sign In!</button>
                    <p class="smalltext">Don't have an account? <a href="/create-account">Register here.</a></p>
                </center>
            </form>
        
    )
}