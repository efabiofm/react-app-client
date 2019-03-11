import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {
  width: '100%',
  height: '100%'
};

export class MapMarkers extends React.Component {
  houseModalRef = React.createRef();

  onMapClick = () => {
    console.log('Map was clicked!');
  }

  renderMarker = (marker) => {
    return (
      <Marker
        key={marker._id}
        title={marker.title}
        position={{ lat: marker.position.lat, lng: marker.position.lng }}
        onClick={() => this.props.onMarkerClick(marker)}>
      </Marker>
    )
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={style}
        onClick={this.onMapClick}
      >
        {this.props.markers.map(this.renderMarker)}
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDn5jFd9F1zSo3XhhCD5r5bf3AQnpph5kI")
})(MapMarkers)