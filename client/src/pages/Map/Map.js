import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../../components/Grid";
import MapContainer from "./MapContainer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Button } from 'reactstrap';


function Map() {
    const [latLng, setLatLng] = useState({lat: 39.9526, lng: -75.1652});

    const getLatLng = (coordinates) => {
        setLatLng(coordinates.latLng.toJSON());
    };

    return (
        <Container fluid>
            <Navbar />
            <Button>Submit</Button>
            <Container>
                <MapContainer clicked={(target, map, coordinates) => { getLatLng(coordinates) }} positions={latLng} />
            </Container>
            <Footer />
        </Container>
    )
}

export default Map;