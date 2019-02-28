import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends React.Component {
  state = {
    markers: [
      {
        title: 'The marker`s title will appear as a tooltip.',
        name: 'SOMA',
        position: { lat: 37.778519, lng: -122.405640 }
      },
      {
        title: 'This is another marker',
        name: 'Dolores park',
        position: { lat: 37.759703, lng: -122.428093 }
      }
    ]
  };

  onMapClick() {
    alert('Map was clicked!');
  }

  onMarkerClick() {
    alert('Marker was clicked!');
  }

  onInfoWindowClose() {
    alert('InfoWindow was closed!');
  }

  renderMarker(marker, index) {
    return (
      <Marker
        key={index}
        title={marker.title}
        name={marker.name}
        position={{ lat: marker.position.lat, lng: marker.position.lng }}>
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
        {this.state.markers.map(this.renderMarker)}
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>This is a place</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDn5jFd9F1zSo3XhhCD5r5bf3AQnpph5kI")
})(MapContainer)