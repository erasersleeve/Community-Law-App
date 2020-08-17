import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Button, Modal } from 'react-bootstrap';
import Form from "../../components/Form";
import MapContainer from "./MapContainer";
import GoogleHeatMap from "../../components/GoogleHeatMap";
// import MapsModal from "../../components/Modul";



function Map() {

    const [lgShow, setShow] = useState(false);
    // const [lgShow, setLgShow] = useState(false);

    const [latLng, setLatLng] = useState({ lat: 39.9526, lng: -75.1652 });

    const getLatLng = (coordinates) => {
        setLatLng(coordinates.latLng.toJSON());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const data = {
            description: form.get('description'),
            experience: form.get('experience'),
            badgeNumber: form.get('badge'),
            // file: form.get('file'),
            lat: latLng.lat,
            lng: latLng.lng,
            date: new Date,
        }
console.log(data)

        fetch("/api/posts", {
            method: "POST",
            body: data
        });
    };

    return (
        <Container fluid>
            <Navbar />
            <GoogleHeatMap />
            <Button onClick={() => setShow(true)}>Submit Incident</Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Incident Report
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <MapContainer clicked={(target, map, coordinates) => { getLatLng(coordinates) }} positions={latLng} /> */}
                    <Form clicked={(target, map, coordinates) => { getLatLng(coordinates) }} positions={latLng} submit={e=> {handleSubmit(e)}}/>
                    {/* <MapContainer /> */}
                </Modal.Body>
            </Modal>

            {/* <Container> */}
            {/* </Container> */}
            <Footer />
        </Container>
    )
}

export default Map;