import React, { useState } from "react";
import { Container } from "../../components/Grid";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Card, Modal, Nav, Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';
import "../../pages/Map/Map"
import MapContainer from "./map";
// import API from "../../utils/API";

import Image from "../../image/nature.jpeg";
import Image2 from "../../image/kelly-kiernan.jpeg";


// import "../../style.css"

const mapStyles = {
    width: '100%',
    height: '100%'
};

const Styles = styled.div`
    .cardInfo {
        width: 90%;
        height: auto;
        background-color: #fff8f0ff;
        margin: 50px;
        color: #111d4aff;
        margin-left: 5%;

    }

    .cardImg {
        // width: 20%;
        min-width: 273px !important;
        height: auto;
        // margin: 50px;
        box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
        cursor: pointer;
    }

    .card:hover{
        transform: scale(1.02);
        box-shadow: 0 10px 20px rgba(0,0,0,.5), 0 4px 8px rgba(0,0,0,.06);
        opacity: 2.0;
    }

    .card-header {
        background: linear-gradient(to top left, #C0C0C0 -5%, #ffcf99ff 75%, #92140cff 100%);        border-radius: 10px !important;
    }

    .card {
        border-radius: 40px !important;
        box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 1px 6px rgba(0,0,0,.05);
    }

    img {
        width: 100%;
        height: auto;
        border-radius: 10px !important;

    }

    // .homeMap {
    //     height: 50px !important;
    // }

    .container {
        width: 900px;
    }

    .background {
        width: 100%;
        max-height: 530px;
    }

    .jumbotron {
            position: relative;
            margin-top: 100px;
            width: 100%;
            // margin-left: 5%;
            padding-top: 0;
            padding-bottom: 0;
            // height: 100px;
        }
`

 const backgroundStyle = {
        "backgroundColor": "#DCDCDC"
    }



export default function Home () {
    const [show, setShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    const handleClose = () => setLgShow(false);


    return (
    <Styles style={backgroundStyle}>




    <Container fluid>

        {/* <Jumbotron>
            <img src={Image}></img>
        </Jumbotron> */}
        <NavBar />
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
                            {/* <Modal.Header closeButton> */}
                                {/* <Modal.Title id="example-custom-modal-styling-title">Modal heading</Modal.Title> */}
                            {/* </Modal.Header>  */}
                            {/* <Modal.Body> */}
                                <Container className="homeMap">
                                    <MapContainer 
                                        closeButton
                                        style={mapStyles}
                                    />
                                </Container>
                            {/* </Modal.Body> */}
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
                    Image:
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
                            {/* <Modal.Header closeButton> */}
                                {/* <Modal.Title id="example-custom-modal-styling-title">Modal heading</Modal.Title> */}
                            {/* </Modal.Header>  */}
                            {/* <Modal.Body> */}
                                <Container className="homeMap">
                                    <MapContainer 
                                        closeButton
                                        style={mapStyles}
                                    />
                                </Container>
                            {/* </Modal.Body> */}
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
                    Image:
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
                            {/* <Modal.Header closeButton> */}
                                {/* <Modal.Title id="example-custom-modal-styling-title">Modal heading</Modal.Title> */}
                            {/* </Modal.Header>  */}
                            {/* <Modal.Body> */}
                                <Container className="homeMap">
                                    <MapContainer 
                                        closeButton
                                        style={mapStyles}
                                    />
                                </Container>
                            {/* </Modal.Body> */}
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
                    Image:
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
        <br />


        <Footer />
    </Container>
    </Styles>
    )
}


// custom-modal.custom-dialog {width:80% !important; top:20%;}
// #media (min-width: 992px)
// .my-modal-lg {
// width: auto;
// }
// #media (min-width: 768px)
// .my-modal-dialog {
// width: 100%;
// height: 100%;
// margin: 0;
// padding: 0;
// }
// #media (min-width: 768px)
// .my-modal-content {
// box-shadow: 0 5px 15px rgba(0,0,0,.5);
// height: auto;
// min-height: 100%;
// border-radius: 0;

// aria-labelledby="example-modal-sizes-title-lg"