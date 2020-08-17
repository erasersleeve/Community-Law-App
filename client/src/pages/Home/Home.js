import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../../components/Grid";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Card, Modal, Nav, Button } from 'react-bootstrap';
import styled from 'styled-components';
// import "../../style.css"


const Styles = styled.div`
    .cardInfo {
        width: 60%;
        min-width: 294px !important;
        height: auto;
        background-color: #fff8f0ff;
        margin: 70px;
        color: #111d4aff;
        border-radius: 4px;
        box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
    }

    .cardImg {
        width: 20%;
        min-width: 273px !important;
        height: auto;
        margin: 70px;
        box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
        cursor: pointer;
    }

    .card:hover{
        transform: scale(1.02);
        box-shadow: 0 10px 20px rgba(0,0,0,.5), 0 4px 8px rgba(0,0,0,.06);
        opacity: 2.0;
    }

    .card-header {
        background-color: #ffcf99ff;
    }

    .imgDiv {
        float: right;
    }
    
    img {
        width: 100%;
        height: auto;
    }
`

function Home () {

    return (
    <Styles className="body">
    <Container fluid>
        <NavBar />
        <h2>Public Feed</h2>
        <div className="row">
            <Card className="card cardInfo border-dark rounded">
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Map</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title>User: </Card.Title>
                    <Card.Text>
                    Location:
                    </Card.Text>
                    <Card.Text>
                    Description: 
                    </Card.Text>
                    <Card.Text>
                    Image:
                    </Card.Text>
                    <Card.Text>
                    Experience:
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="cardImg">
                <img src="https://via.placeholder.com/150" alt="placeholder" />
            </Card>
        </div>
        <div className="row">
            <Card className="card cardInfo border-dark rounded">
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Map</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title>User: </Card.Title>
                    <Card.Text>
                    Location:
                    </Card.Text>
                    <Card.Text>
                    Description: 
                    </Card.Text>
                    <Card.Text>
                    Image:
                    </Card.Text>
                    <Card.Text>
                    Experience:
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="cardImg">
                <img src="https://via.placeholder.com/150" alt="placeholder" />
            </Card>
        </div>
        <div className="row">
            <Card className="card cardInfo border-dark rounded">
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Map</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title>User: </Card.Title>
                    <Card.Text>
                    Location:
                    </Card.Text>
                    <Card.Text>
                    Description: 
                    </Card.Text>
                    <Card.Text>
                    Image:
                    </Card.Text>
                    <Card.Text>
                    Experience:
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="cardImg">
                <img src="https://via.placeholder.com/150" alt="placeholder" />
            </Card>
        </div>
        <div className="row">
            <Card className="card cardInfo border-dark rounded">
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Map</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title>User: </Card.Title>
                    <Card.Text>
                    Location:
                    </Card.Text>
                    <Card.Text>
                    Description: 
                    </Card.Text>
                    <Card.Text>
                    Image:
                    </Card.Text>
                    <Card.Text>
                    Experience:
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="cardImg">
                <img src="https://via.placeholder.com/150" alt="placeholder" />
            </Card>
        </div>

        <Footer />
    </Container>
    </Styles>
    )
}

export default Home;
