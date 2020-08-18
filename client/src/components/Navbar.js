
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Jumbotron, Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./NavBar.css";

// import "./Navbar.css";
import Image from "../image/kelly-kiernan.jpeg";




const Styles = styled.div`
    .navbar {
        background-color: #111d4aff;
        color: white;
        margin-bottom: 20px;
        width: 100%;
        // margin-left: -30px;
        // margin-right: -10px;
    }

    .jumbotron {
        position: relative;
        width: 80%;
        margin-left: 10%;
        padding-top: 0;
        padding-bottom: 0;
        // height: 100px;
    }

    .navbar-light .navbar-nav .nav-link {
        color: #B8B8B8;
    }

    .navbar-light .navbar-brand {
        color: white;
    }

    .slideshow {
        position: relative;
        width: 50%;
        margin-left: 25%;
    }
    
`
const backgroundStyle = {
    "backgroundImage": Image
}

function NavBar(props) {
    const location = useLocation();

    // const [redirectTo, setRedirectTo] = useState("");

    // const handleLogout = (event) => {
    //     axios
    //       .post("/api/user/logout")
    //       .then((res) => {
    //         console.log(res);
    //         if (res.status === 200) {

    //           setRedirectTo("/");
    //         }
    //       })
    //   };

    return (

        <header>
            <>
            <Styles>

                <Navbar expand="md">
                    <Navbar.Brand href="/home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/login" className={location.pathname === "/login" ? "nav-link active" : "nav-link"}>Sign Up/Login</Nav.Link>
                        <Nav.Link href="/home" className={location.pathname === "/home" ? "nav-link active" : "nav-link"}>Home</Nav.Link>
                        <Nav.Link href="/map" className={location.pathname === "/map" ? "nav-link active" : "nav-link"}>Map</Nav.Link>
                        <Nav.Link href="/resources" className={location.pathname === "/resources" ? "nav-link active" : "nav-link"}>Resources</Nav.Link>
                        <Nav.Link onClick={props.handleLogout} className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Log Out</Nav.Link>
                    </Nav>
                </Navbar>
{/* 
                <div className="slideshow">
 
                    </div> */}
  
                    <Jumbotron>
                    <Carousel className="slideshow">
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/150?text=Custom Title&bg=373940"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/150?text=Custom Title 2&bg=373940"
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/150?text=Custom Title 3&bg=373940"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        </Carousel>
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

