import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../../components/Grid";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Card, Modal, Nav, Button } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


const Styles = styled.div`
    .cardInfo {
        width: 80%;
        height: auto;
        margin-left: 10%;
    }

    .header {
        text-align: center;
    }

    .modal-content {
        width: 700px !important;
    }

    #example-modal-sizes-title-lg2 {
        width: 90% !important;
    }
`
const article = "https://whyy.org/articles/gun-violence-hearings-leave-philly-councilmembers-residents-disheartened-and-tired/";


function Resources() {
    const [lgShow, setLgShow] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <Styles>
        <Container fluid>

            <NavBar />
            <Card className="card cardInfo border-dark rounded">
                <Card.Header className="header">
                    <h2>Article Name</h2>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Article </Card.Title>
                    <Card.Text>
                        <p>Lorem ipsum dolor sit amet, nam nihil erroribus id, et pro aeterno veritus dolorem. Sit ad possit pertinax, populo possim lucilius id per. Omnis simul probatus eam ea, vim stet labitur sanctus cu. Vix ei molestiae necessitatibus. Ea vitae tractatos signiferumque usu, zril blandit efficiendi ex duo.</p>
                    </Card.Text>
                    <Button href="https://whyy.org/articles/gun-violence-hearings-leave-philly-councilmembers-residents-disheartened-and-tired/" target="_blank" variant="primary" onClick={() => setShow(true)}>
                        Full Article
                    </Button>
                    {/* <Modal
                        className="myModal"
                        size="lg"
                        show={show}
                        onHide={() => setShow(false)}
                        dialogClassName="modal-90w"
                    
                    >
                        <Modal.Header closeButton>
                            <Modal.Title >
                            Article
                            </Modal.Title>
                        </Modal.Header>
                        <Container>
                            
                        </Container>
            <Modal.Body className="test">
                <a href="https://whyy.org/articles/gun-violence-hearings-leave-philly-councilmembers-residents-disheartened-and-tired/"></a>

            </Modal.Body>

        </Modal> */}

                </Card.Body>
            </Card>
            <Footer />
        </Container>
        </Styles>
    )
}

export default Resources;

{/* <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-90w" aria-labelledby="full-article">
<Modal.Header closeButton>
    <Modal.Title id="full-article">Modal heading</Modal.Title>
</Modal.Header>
<Modal.Body>
    <p>Lorem ipsum dolor sit amet, nam nihil erroribus id, et pro aeterno veritus dolorem. Sit ad possit pertinax, populo possim lucilius id per. Omnis simul probatus eam ea, vim stet labitur sanctus cu. Vix ei molestiae necessitatibus. Ea vitae tractatos signiferumque usu, zril blandit efficiendi ex duo.</p>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={handleClose}>
    Close
</Button>
</Modal.Footer>
</Modal> */}