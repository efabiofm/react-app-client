import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapHouseForm extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={{ width: '100%', height: '100%' }}
        onClick={this.props.onMapClick}
      >
        {!isEmpty(this.props.house.position) && <Marker position={{ lat: this.props.house.position.lat, lng: this.props.house.position.lng }} />}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDn5jFd9F1zSo3XhhCD5r5bf3AQnpph5kI")
})(MapHouseForm)
