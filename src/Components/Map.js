
import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const latitude = parseFloat(localStorage.getItem("latitude"));
const longitude = parseFloat(localStorage.getItem("longitude"));

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `550px`, width: '70%', marginLeft:'30%', position:'fixed' }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: latitude - 0.00000001, lng: longitude - 0.0000001 }}
  >
    <Marker position={{ lat: 28.644800, lng: 77.216721 }} />
    <Marker position={{ lat: latitude - 0.0001, lng: longitude - 0.0003 }} />
    <Marker position={{ lat: latitude - 0.002, lng: longitude - 0.002 }} />
    <Marker position={{ lat: latitude - 0.0005, lng: longitude - 0.006 }} />
    <Marker position={{ lat: latitude - 0.001, lng: longitude - 0.003 }} />
    <Marker position={{ lat: latitude - 0.005, lng: longitude - 0.0021 }} />
    <Marker position={{ lat: latitude - 0.002, lng: longitude - 0.005 }} />
  </GoogleMap>
));

export default MyMapComponent;

