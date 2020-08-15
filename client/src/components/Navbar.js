
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';
// import "./Navbar.css";

const Styles = styled.div`
    .navbar {
        background-color: #111d4aff;
        color: white;
        margin-bottom: 20px;
        width: 105%;
        margin-left: -30px;
    }

    .jumbotron {
        margin-left: -15px;
        margin-right: -15px;
        background: #92140cff;
        color: #B8B8B8;
    }

    .navbar-light .navbar-nav .nav-link {
        color: #B8B8B8;
    }

    .navbar-light .navbar-brand {
        color: white;
    }
    
`

function NavBar() {
    const location = useLocation();

    return (
        <header>
            <>
            <Styles>

                <Navbar>
                    <Navbar.Brand href="/home">Navbar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav Toggle navigation" />
                    <Nav className="mr-auto">
                        <Nav.Link href="/" className={location.pathname === "/login" ? "nav-link active" : "nav-link"}>Login</Nav.Link>
                        <Nav.Link href="/signup" className={location.pathname === "/signup" ? "nav-link active" : "nav-link"}>Signup</Nav.Link>
                        <Nav.Link href="/home" className={location.pathname === "/home" ? "nav-link active" : "nav-link"}>Home</Nav.Link>
                        <Nav.Link href="/map" className={location.pathname === "/map" ? "nav-link active" : "nav-link"}>Map</Nav.Link>
                        <Nav.Link href="/resources" className={location.pathname === "/resources" ? "nav-link active" : "nav-link"}>Resources</Nav.Link>
                    </Nav>
                </Navbar>

                <Jumbotron className="jumbo fluid">
                    <h2>Public Feed</h2>
                </Jumbotron>

            </Styles>
            </>




            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand nav-link rounded" href="index.html">Tim Winters</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent"></div>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/map" className={location.pathname === "/map" ? "nav-link active" : "nav-link"}>Map</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/signout" className={location.pathname === "/signout" ? "nav-link active" : "nav-link"}>Sign Out</Link>
                    </li>
                </ul>
        </nav> */}
        </header>
    )
}

export default NavBar

