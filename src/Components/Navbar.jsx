import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>

          <Navbar.Brand href="#home">Serenity</Navbar.Brand>
          
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#videos">Videos</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="/login">
              <Button variant="outline-light">Login</Button>
            </Nav.Link>
            <Nav.Link href="/signup">
              <Button variant="primary">Sign Up</Button>
            </Nav.Link>
          </Nav>

        </Container>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;