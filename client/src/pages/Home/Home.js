import React, { useState, useEffect } from "react";
import { Container } from "../../components/Grid";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Card, Modal, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { Redirect } from "react-router-dom";
import "../../pages/Map/Map"
import MapContainer from "./map";
import Image2 from "../../image/kelly-kiernan.jpeg";
import RenderCard from "../../components/Card";

const mapStyles = {
    width: '100%',
    height: '100%'
};

const Styles = styled.div`

    .background {
        width: 100%;
        max-height: 530px;
    }

    .jumbotron {
            position: relative;
            margin-top: 100px;
            padding-top: 0;
            padding-bottom: 0;
        }

    .test {
        margin-top: -100px;
        width: 100%;
    }
`

 const backgroundStyle = {
        "backgroundColor": "#F5F5F5"
    }




export default function Home (props) {
    // const [redirect, setRedirect] = useState(false)
    useEffect(() => {
        if (props.loggedIn == false){
            props.setRedirect(true)
        }
    }, [])

    // const renderRedirect= () => {
    //     if (redirect == true){
    //         return <Redirect to="/"/>
    //     }
    // }
    const [show, setShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    const handleClose = () => setLgShow(false);


    return (
    <Styles style={backgroundStyle}>




    <Container fluid className="test">

        <NavBar />
        <RenderCard />
  


        <Footer />
    </Container>
    </Styles>
    )
}
