import React, { Component } from 'react';

import './Map.scss';

export default class Map extends Component {
  componentDidMount() {
    const center = {
      lat: this.props.lat,
      lng: this.props.lon
    };

    const map = new google.maps.Map(this.refs.map, {
      zoom: 10,
      center
    });

  var marker = new google.maps.Marker({
      position: center,
      map,
      title: 'Hello World!'
    });
  }

  render() {
    return <div className="Map" ref="map" />;
  }
}
