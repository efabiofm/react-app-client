import React from 'react';
import { Button, Modal, Image } from 'react-bootstrap';
import { formatPrice } from '../helpers';

class HouseModal extends React.Component {
  state = {
    show: false,
    house: {
      price: 0
    }
  };

  handleOpen = (house) => {
    this.setState({ show: true, house });
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{this.state.house.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src="http://via.placeholder.com/640x360" width="100%"/>
          <ul className="list-unstyled">
            <li>Price: {formatPrice(this.state.house.price)}</li>
            <li>Size: {this.state.house.size} m<sup>2</sup></li>
          </ul>
          <p>{this.state.house.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default HouseModal;
