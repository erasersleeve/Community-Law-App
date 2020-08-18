import React, { useState } from "react";
import { Container } from "../../components/Grid";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Card, Modal, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import "../../pages/Map/Map";
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



export default function Home () {
    const [show, setShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    const handleClose = () => setLgShow(false);


    return (
    <Styles style={backgroundStyle}>




    <Container fluid className="test">

        <NavBar />
        <RenderCard />
        {/* <Button onClick={() => setShow(true)}>Submit Incident</Button>
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
        </Modal> */}
        {/* <div className="row">
            <Card className="card cardInfo border-dark">

                <Card.Body >
                    <div className="row">
                        <div className="col-lg-12">
                        <Card.Header >
                            <Nav variant="tabs" defaultActiveKey="#first">
                            <Nav.Item>
                                <Nav.Link href="#first">Incident Details</Nav.Link>
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
                                <Container className="homeMap">
                                    <MapContainer 
                                        closeButton
                                        style={mapStyles}
                                    />
                                </Container>
                        </Modal>

                    </Nav.Item>
                            </Nav>
                        </Card.Header>
                        </div>

                    </div>
                    <br />

                    <div className="row">
                    <div className="col-lg-8">
                    <Card.Title>User: </Card.Title>
                    <Card.Text>
                    Location:
                    </Card.Text>
                    <Card.Text>
                    Description: 
                    </Card.Text>
                    <Card.Text>
                    Experience:
                    </Card.Text>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">

                    <div >
                        <img src={Image2} alt="placeholder" />
                    </div>
                    </div>
                    </div>
                </Card.Body>
            </Card>

        </div>

        <div className="row">
            <Card className="card cardInfo border-dark rounded">

                <Card.Body >
                    <div className="row">
                        <div className="col-lg-12">
                        <Card.Header >
                            <Nav variant="tabs" defaultActiveKey="#first">
                            <Nav.Item>
                                <Nav.Link href="#first">Incident Details</Nav.Link>
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
    
                                <Container className="homeMap">
                                    <MapContainer 
                                        closeButton
                                        style={mapStyles}
                                    />
                                </Container>
                        </Modal>

                    </Nav.Item>
                            </Nav>
                        </Card.Header>
                        </div>

                    </div>
                    <br />

                    <div className="row">
                    <div className="col-lg-8">
                    <Card.Title>User: </Card.Title>
                    <Card.Text>
                    Location:
                    </Card.Text>
                    <Card.Text>
                    Description: 
                    </Card.Text>
                    <Card.Text>
                    Experience:
                    </Card.Text>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">

                    <div >
                        <img src={Image2} alt="placeholder" />
                    </div>
                    </div>
                    </div>
                </Card.Body>
            </Card>
            </div>
            <div className="row">
            <Card className="card cardInfo border-dark rounded">

                <Card.Body >
                    <div className="row">
                        <div className="col-lg-12">
                        <Card.Header >
                            <Nav variant="tabs" defaultActiveKey="#first">
                            <Nav.Item>
                                <Nav.Link href="#first">Incident Details</Nav.Link>
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

                                <Container className="homeMap">
                                    <MapContainer 
                                        closeButton
                                        style={mapStyles}
                                    />
                                </Container>
                        </Modal>

                    </Nav.Item>
                            </Nav>
                        </Card.Header>
                        </div>

                    </div>
                    <br />

                    <div className="row">
                    <div className="col-lg-8">
                    <Card.Title>User: </Card.Title>
                    <Card.Text>
                    Location:
                    </Card.Text>
                    <Card.Text>
                    Description: 
                    </Card.Text>
                    <Card.Text>
                    Experience:
                    </Card.Text>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">

                    <div >
                        <img src={Image2} alt="placeholder" />
                    </div>
                    </div>
                    </div>
                </Card.Body>
            </Card>
            </div>
        <br />
        <br />
        <br /> */}


        <Footer />
    </Container>
    </Styles>
    )
}
