import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import serenity from '../assets/Yoga-Logo.png'

const CustomNavbar = () => {
  return (
    <div>
      <Navbar style={{ backgroundColor: '#EDFEFF' }} variant="dark">
        <Container className="px-3">

          <Navbar.Brand href="#home">
            <img 
              src={serenity}
              height="70"
              width="100"
              className="d-inline-block align-top"
              alt="Serenity Logo"
            />
          </Navbar.Brand>
          
          <Nav className="mr-auto">
            <Nav.Link href="/" className="text-dark font-weight-bold" style={{color: '#014E58'}}>Home</Nav.Link>
            <Nav.Link href="#videos" className="text-dark" style={{color: '#014E58'}}>Videos</Nav.Link>
            <Nav.Link href="login" className="text-dark" style={{color: '#014E58'}}>Sign In</Nav.Link>
            <Nav.Link href="signup" className="text-dark font-weight-bold" style={{color: '#014E58'}}>Sign Up</Nav.Link>
          </Nav>

        </Container>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;