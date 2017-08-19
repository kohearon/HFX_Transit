import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import React, { Component } from 'react';

export default class Map extends Component {

  render() {

    const GettingStartedGoogleMap = withGoogleMap(props => (
      <GoogleMap
        defaultZoom={3}
        defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
      >
      </GoogleMap>
    ));

    return (
      <GettingStartedGoogleMap
        containerElement = { <div style={{ height: `500px` }} /> }
        mapElement = { <div style={{ height: `500px` }} /> }
      />
    )
  }
}
