import React from 'react';
import { connect } from 'react-redux';
import HouseModal from './HouseModal';
import MapMarkers from './MapMarkers';

export class MapView extends React.Component {
  houseModalRef = React.createRef();

  onMarkerClick = (marker) => {
    this.houseModalRef.current.handleOpen(marker);
  }

  render() {
    return (
      <>
        <HouseModal ref={this.houseModalRef}/>
        <MapMarkers onMarkerClick={this.onMarkerClick} markers={this.props.houses}/>
      </>
    );
  }
}

export default connect(state => ({ houses: state.houses }))(MapView);