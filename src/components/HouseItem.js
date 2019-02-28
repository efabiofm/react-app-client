import React from 'react';
import { Card, Button, ButtonToolbar } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

const HouseItem = ({ value }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{value.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{value.location}</Card.Subtitle>
        <Card.Text>{value.description}</Card.Text>
        <Card.Text>{formatPrice(value.price)}</Card.Text>
        <ButtonToolbar>
          <Button variant="outline-dark" className="mr-2">Edit</Button>
          <Button variant="outline-dark">Delete</Button>
        </ButtonToolbar>
      </Card.Body>
    </Card>
  );
}

HouseItem.propTypes = {
  value: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })
}

export default HouseItem;
