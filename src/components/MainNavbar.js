import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink }  from 'react-router-dom';

class MainNavbar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>FF</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/">/</NavLink>
            <NavLink className="nav-link" to="/map">Google Maps</NavLink>
            <NavLink className="nav-link" to="/realestate">Real Estate</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

export default MainNavbar;