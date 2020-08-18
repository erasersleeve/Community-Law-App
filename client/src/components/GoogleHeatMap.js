import React from 'react';
import { Map, HeatMap, GoogleApiWrapper } from 'google-maps-react';
import "./GoogleHeatMap.css";

const mapStyles = {
    // position: 'relative',
    display: 'block',
    width: '100%',
    height: '100%'
};

function MapContainer(props) {
    const positions = [
        { lat: 25.782551, lng: -80.445368 },
        { lat: 25.782745, lng: -80.444586 },
        { lat: 25.782842, lng: -80.443688 },
        { lat: 25.782919, lng: -80.442815 },
        { lat: 25.782992, lng: -80.442112 },
        { lat: 25.7831, lng: -80.441461 },
        { lat: 25.783206, lng: -80.440829 },
        { lat: 25.783273, lng: -80.440324 },
        { lat: 25.783316, lng: -80.440023 },
        { lat: 25.783357, lng: -80.439794 },
        { lat: 25.783371, lng: -80.439687 },
        { lat: 25.783368, lng: -80.439666 },
        { lat: 25.783383, lng: -80.439594 },
        { lat: 25.783508, lng: -80.439525 },
        { lat: 25.783842, lng: -80.439591 },
        { lat: 25.784147, lng: -80.439668 }
    ];

    return (
        <div>
            <Map
                style={{ height: '300px', width: '300px', position: 'center' }}
                className='map'
                google={props.google}
                zoom={14}
                initialCenter={{
                    lat: 39.9526,
                    lng: -75.1652
                }}
            >

                <HeatMap
                    opacity={.5}
                    positions={positions}
                    // radius={1000}
                />
            </Map>
        </div>
    );
}

export default GoogleApiWrapper({
    // Maps API key
    apiKey: process.env.REACT_APP_MAPS_API,
    libraries: ['visualization']
})(MapContainer);