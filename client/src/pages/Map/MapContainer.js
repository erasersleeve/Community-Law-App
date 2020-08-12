import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

function MapContainer (props) {
    return (
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: props.lat || -1.2884,
         lng: props.lng || 36.8233
        }}
      />
    );
}

export default GoogleApiWrapper({
// Maps API key
    apiKey: process.env.REACT_APP_MAPS_API
})(MapContainer);