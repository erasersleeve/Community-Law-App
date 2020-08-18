import React, {  useState } from "react";
import { Container } from "../../components/Grid";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "../../image/panoramicImg.jpeg";



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

    .jumbotron {
            position: relative;
            width: 100%;
            // margin-left: 5%;
            padding-top: 0;
            padding-bottom: 0;
            // height: 100px;
        }

    .background {
        width: 100%;
        max-height: 530px;
    }
`
const article = "https://whyy.org/articles/gun-violence-hearings-leave-philly-councilmembers-residents-disheartened-and-tired/";


function Resources() {
    const [lgShow, setLgShow] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

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

                </Card.Body>
            </Card>
            <Footer />
        </Container>
        </Styles>
    )
}

export default Resources;
