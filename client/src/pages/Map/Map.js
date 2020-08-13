import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../../components/Grid";
import MapContainer from "./MapContainer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";



function Map() {
    return (
        <Container fluid>
            <Navbar />
            <MapContainer />
            <Footer />
        </Container>
    )
}

export default Map;