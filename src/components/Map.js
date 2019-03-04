import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import HouseModal from './HouseModal';
import { getHouses } from '../api/house.api';

const style = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends React.Component {
  houseModalRef = React.createRef();

  state = {
    markers: [],
  };

  onMapClick = () => {
    console.log('Map was clicked!');
  }

  onMarkerClick = (marker) => {
    this.houseModalRef.current.handleOpen(marker);
  }

  onInfoWindowClose() {
    console.log('InfoWindow was closed!');
  }

  renderMarker = (marker) => {
    return (
      <Marker
        key={marker._id}
        title={marker.title}
        position={{ lat: marker.position.lat, lng: marker.position.lng }}
        onClick={() => this.onMarkerClick(marker)}>
      </Marker>
    )
  }

  componentDidMount() {
    return getHouses().then((markers) => {
      this.setState({ markers });
    });
  }

  render() {
    return (
      <>
        <HouseModal ref={this.houseModalRef}/>
        <Map
          google={this.props.google}
          zoom={14}
          style={style}
          onClick={this.onMapClick}
        >
          {this.state.markers.map(this.renderMarker)}
        </Map>
      </>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDn5jFd9F1zSo3XhhCD5r5bf3AQnpph5kI")
})(MapContainer)