import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../../components/Grid";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Card, Modal, Nav, Button, Form, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { Redirect } from "react-router-dom";
import "../../pages/Map/Map"
import MapContainer from "./map";
import API from "../../utils/API";

// import "../../style.css"

const mapStyles = {
    width: '100%',
    height: '100%'
};

const Styles = styled.div`
    .cardInfo {
        width: 60%;
        min-width: 294px !important;
        height: auto;
        background-color: #fff8f0ff;
        margin: 50px;
        color: #111d4aff;
        border-radius: 4px;
        box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
    }

    .cardImg {
        width: 20%;
        min-width: 273px !important;
        height: auto;
        margin: 50px;
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

    .custom-modal {

    }

    .homeMap {
        height: 600px !important;
    }

    .container {
        width: 900px;
    }

    .row {
        // width: 110% !important;
    }

`

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
    <Styles className="body">
    {props.renderRedirect()}
    <Container fluid>
        <NavBar handleLogout={props.handleLogout}/>
        <Button onClick={() => setShow(true)}>Submit Incident</Button>
        <Modal
            size="lg"
            show={show}
            onHide={() => setShow(false)}
        >
        <Modal.Header closeButton>
          <Modal.Title>
            Incident Report
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group controlId="formGroupLocation">
                <Form.Label>Location Address</Form.Label>
                <Form.Control 
                required
                type="address" 
                name="address" 
                placeholder="Enter Incident Location (Required)" />
            </Form.Group>
            <Form.Group controlId="formGroupDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control 
                required
                type="description" 
                name="description" 
                placeholder="Incident Description (Required)" />
            </Form.Group>
            <Form.Group controlId="formGridState">
                <Form.Label>Experience</Form.Label>
                <Form.Control 
                as="select" 
                name="experience" 
                placeholder="Choose.." 
                defaultValue="Choose...">
                    <option>Excellent!</option>
                    <option>Pretty Good</option>
                    <option>Average</option>
                    <option>Bad</option>
                    <option>Awful</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Officer's Badge Number</Form.Label>
                <Form.Control type="badge" name="badge" placeholder="Enter Officer Badge Number"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.File
                className="position-relative"
                name="file"
                label="Upload Image"
                // onChange={handleChange}
                // isInvalid={!!errors.file}
                // feedback={errors.file}
                id="validationFormik107"
                feedbackTooltip
                />
            </Form.Group>
            <Button type="submit">Submit form</Button>
        </Form>
        </Modal.Body>
        </Modal>
        <div className="row">
            <Card className="card cardInfo border-dark rounded">
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link variant="primary" onClick={() => setLgShow(true)}>
                        Map
                    </Nav.Link>

                        <Modal
                            size="lg"
                            show={lgShow} 
                            onHide={() => setLgShow(false)} dialogClassName="modal-90w"  
                            aria-labelledby="example-custom-modal-styling-title"        
                        >
                            {/* <Modal.Header closeButton>
                                <Modal.Title id="example-custom-modal-styling-title">Modal heading</Modal.Title>
                            </Modal.Header> */}
                            {/* <Modal.Body> */}
                                <Container className="homeMap">
                                    <MapContainer 
                                        style={mapStyles}
                                    />
                                </Container>
                            {/* </Modal.Body> */}
                        </Modal>

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
                <img src="#validationFormik107" alt="placeholder" />
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

