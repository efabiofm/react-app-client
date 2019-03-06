import React from 'react';
import { Card, Button, ButtonToolbar } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

const HouseItem = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title id={props.value._id}>{props.value.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.value.location}</Card.Subtitle>
        <Card.Text>{props.value.description}</Card.Text>
        <Card.Text>{formatPrice(props.value.price)}</Card.Text>
        <ButtonToolbar>
          <Button variant="outline-dark" className="mr-2" onClick={() => props.editHouse(props.value)}>Edit</Button>
          <Button variant="outline-dark" onClick={() => props.deleteHouse(props.value._id)}>Delete</Button>
        </ButtonToolbar>
      </Card.Body>
    </Card>
  );
}

HouseItem.propTypes = {
  value: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string
  })
}

export default HouseItem;
