import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import React, { Component } from 'react';

export default class Map extends Component {

  render() {

    const GettingStartedGoogleMap = withGoogleMap(props => (
      <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 44.651070 , lng: 	-63.582687}}
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
