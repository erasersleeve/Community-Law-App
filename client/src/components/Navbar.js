
import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Nav, Jumbotron, Container } from 'react-bootstrap';
import styled from 'styled-components';
// import "./Navbar.css";
import Image from "../image/panoramicImg.jpeg";




const Styles = styled.div`
    .navbar {
        display: flex;
        background-color: transparent;
        color: white;
        margin-bottom: 20px;
        width: 100%;
        // font-family: Mentone;
        margin-left: -30px;
    }

    .navbar-light .navbar-nav .nav-link {
        color: #B8B8B8;
    }

    .navbar-light .navbar-brand {
        color: white;
    }   

    .title {
        padding: 5px;
    }

    .links {
        margin-right: -50%;
    }

    .nav {
        width: 110%;
    }

    .container {
        width: 500px;

    }

    .jumbotron {
        // background-color: #92140cff;

        position: relative;
        margin-top: 100px;
        // width: 500px;
        // margin-left: 5%;
        padding-top: 0;
        padding-bottom: 0;
        height: 400px;
    }

    .header {
        width: 100%;
    }

    .test {
        margin-top: -100px;
    }

`
const backgroundStyle = {
    backgroundImage: `url(${Image})`
}

// const backgroundColor = {
//     backgroundColor: "#fff8f0ff"
// }

function NavBar() {
    const location = useLocation();

    return (
        <header>
            <>
            <Styles>
            <div className="test">
                <Jumbotron style={backgroundStyle}>
                {/* <img src={Image}> */}
            
                    {/* <div className="nav"> */}
                        <Navbar expand="md">
                            <Navbar.Brand href="/home" className="title ">Title</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="links basic-navbar-nav float-right">
                                <Nav className="mr-auto justify-content-end">
                                    <Nav.Link href="/" className={location.pathname === "/login" ? "nav-link active" : "nav-link"}>Login</Nav.Link>
                                    <Nav.Link href="/signup" className={location.pathname === "/signup" ? "nav-link active" : "nav-link"}>Signup</Nav.Link>
                                    <Nav.Link href="/home" className={location.pathname === "/home" ? "nav-link active" : "nav-link"}>Home</Nav.Link>
                                    <Nav.Link href="/map" className={location.pathname === "/map" ? "nav-link active" : "nav-link"}>Map</Nav.Link>
                                    <Nav.Link href="/resources" className={location.pathname === "/resources" ? "nav-link active" : "nav-link"}>Resources</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    {/* </img> */}
                    {/* </div> */}
                </Jumbotron>
            </div>
            </Styles>
            </>

        </header>
    )
}

export default NavBar

