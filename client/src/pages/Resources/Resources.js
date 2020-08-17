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
                    <h2>
                    Violent crime dipped in Philly last week. Anti-violence advocates want that dip to last 
                    </h2>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Article </Card.Title>
                    <Card.Text>
                        <p>
                        Long before the coronavirus pandemic reached the city, PANN was on the front lines of another crisis: gun violence. For the last three years, Philadelphia has seen an increase in homicides, with 356 people killed in the city in 2019, the highest number since 2007. The city has also been stuck in a bloody cycle of shootings, several of which landed innocent children in the hospital or a city morgue.

                        </p>
                    </Card.Text>
                    <Button href="https://whyy.org/articles/violent-crime-dipped-in-philly-last-week-anti-violence-advocates-want-it-to-last/"
                target="_blank" variant="primary" onClick={() => setShow(true)}>
                Full Story
                </Button>
                </Card.Body>
            </Card>

            <Card className="card cardInfo border-dark rounded">
                <Card.Header className="header">
                    <h2>
                    Gun violence hearings leave Philly councilmembers, residents ‘disheartened’ and ‘tired’
                    </h2>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Article </Card.Title>
                    <Card.Text>
                        <p>
                        During the second day of virtual emergency hearings called to address the rising gun violence, lawmakers spent more than an hour pressing leadership about the office’s $9.4 million budget, the outcomes of its anti-violence programming, and the metrics it uses to determine success. 
                        </p>
                    </Card.Text>
                    <Button href="https://whyy.org/articles/gun-violence-hearings-leave-philly-councilmembers-residents-disheartened-and-tired/"
                target="_blank" variant="primary" onClick={() => setShow(true)}>
                Full Story
                </Button>
                </Card.Body>
            </Card>

            <Card className="card cardInfo border-dark rounded">
                <Card.Header className="header">
                    <h2>Philly DA files charges against man in fatal shooting of 7-year-old</h2>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Article </Card.Title>
                    <Card.Text>
                        <p>
                        A 7-year-old Southwest Philadelphia boy struck in the head by a stray bullet over the weekend has died from his injuries. Zamar Jones was pronounced dead Monday at Children’s Hospital of Philadelphia, the District Attorney’s Office said.
                        </p>
                    </Card.Text>
                    <Button href="https://whyy.org/articles/philly-da-files-charges-against-man-involved-in-shooting-of-7-year-old/"
                target="_blank" variant="primary" onClick={() => setShow(true)}>
                Full Story
                </Button>
                </Card.Body>
            </Card>
         
            <Footer />
        </Container>
        </Styles>
    )
}

export default Resources;

