import React, {PureComponent} from "react";
import leaflet from 'leaflet';
import {icon} from "../../config/config";
import {offersType} from "../../types";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this._map = null;
  }

  _initMap() {
    const {offers} = this.props;
    const {city, coordinates} = offers[0];

    const center = [city.latitude, city.longitude];
    const zoom = coordinates.zoom;

    this._map = leaflet.map(`map`, {
      center,
      zoom,
      zoomControl: false,
      marker: true
    });

    this._map.setView([52.38333, 4.9], coordinates.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    offers.forEach((offer) => {
      const offerCords = [offer.coordinates.latitude, offer.coordinates.longitude];

      leaflet
        .marker(offerCords, {icon})
        .addTo(this._map);
    });
  }

  componentDidMount() {
    this._initMap();
  }

  componentWillUnmount() {
    this._map.remove();
  }

  render() {
    return (
      <div id="map" ref={this.mapRef} style={{height: `100%`}}></div>
    );
  }
}

Map.propTypes = {
  offers: offersType
};

export default Map;
