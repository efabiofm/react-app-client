import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form } from 'react-bootstrap';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  show: false,
  validated: false,
  house: {
    title: '',
    location: '',
    type: '',
    price: 0,
    size: 0,
    description: '',
    position: {}
  }
};

class HouseForm extends React.Component {
  static propTypes = {
    addHouse: PropTypes.func.isRequired
  };

  state = initialState;

  handleChange = (e) => {
    const house = { ...this.state.house };
    house[e.target.name] = e.target.type === 'number' ? Number(e.target.value) : e.target.value;
    this.setState({ house });
  }

  handleClose = () => {
    this.setState(initialState);
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      this.props.addHouse(this.state.house);
      this.setState(initialState);
    } else {
      this.setState({ validated: true });
    }
  }

  onMapClick = (a, b, c) => {
    const house = { ...this.state.house };
    const lat = c.latLng.lat();
    const lng = c.latLng.lng();
    house.position = { lat, lng };
    this.setState({ house });
  }

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          + Add new
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose} size="lg">
          <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>New House</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  required
                  name="title"
                  value={this.state.house.title || ''}
                  onChange={this.handleChange}/>
              </Form.Group>
              
              <Form.Group controlId="type">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  required
                  as="select" name="type"
                  value={this.state.house.type || ''}
                  onChange={this.handleChange}>
                  <option></option>
                  <option>Rent</option>
                  <option>Sale</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  required
                  name="location"
                  value={this.state.house.location || ''}
                  onChange={this.handleChange}/>
              </Form.Group>

              <Form.Group controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="price"
                  value={this.state.house.price || 0}
                  onChange={this.handleChange}/>
              </Form.Group>

              <Form.Group controlId="size">
                <Form.Label>Size</Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="size"
                  value={this.state.house.size || 0}
                  onChange={this.handleChange}/>
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={this.state.house.description || ''}
                  onChange={this.handleChange}/>
              </Form.Group>

              <Form.Group className="position-relative" style={{height: '383px'}}>
                <Form.Label>Location</Form.Label>
                <Map
                  google={this.props.google}
                  zoom={14}
                  style={{ width: '100%', height: '100%' }}
                  onClick={this.onMapClick}
                >
                  {!isEmpty(this.state.house.position) && <Marker position={{ lat: this.state.house.position.lat, lng: this.state.house.position.lng }} />}
                </Map>
              </Form.Group>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDn5jFd9F1zSo3XhhCD5r5bf3AQnpph5kI")
})(HouseForm)
//export default HouseForm;
