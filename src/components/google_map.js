import React, { Component } from "react";

class GoogleMap extends Component {
  componentDidMount() { //these things are called after the components gets rendered on screen
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
