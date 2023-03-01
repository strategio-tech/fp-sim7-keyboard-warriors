import React,{useState} from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import serenity from '../assets/Yoga-Logo.png';
import profileImage from '../assets/Luuh.jpg';
import addVideoImage from '../assets/addVideo.png'

const SignedInNav = () => {
    const[loggedIn, setloggedIn] = useState(true)
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

            {loggedIn ? (
                <>
                    <Nav.Link href="/">
                        <img
                            src={addVideoImage} 
                            height= "30"
                            className=""
                            alt="Add"
                        />
                    </Nav.Link>

                    <NavDropdown 
                                title={<img 
                                src= {profileImage}
                                height="30"
                                width="30"
                                className="rounded-circle mr-2"
                                alt="Profile"
                            />
                            }
                            
                            >
                            <NavDropdown.Item href="" style={{ backgroundColor: '#014E58', color:'white' }}>Your profile</NavDropdown.Item>

                            <NavDropdown title="Playlists" style={{ backgroundColor: '#014E58' }}> 
                                <NavDropdown.Item href="" style={{ backgroundColor: '#014E58', color:'white' }}>Playlist 1</NavDropdown.Item>

                                <NavDropdown.Item href="" style={{ backgroundColor: '#014E58', color:'white' }}>Playlist 2</NavDropdown.Item>

                            </NavDropdown>
                            <NavDropdown.Divider/>

                            <NavDropdown.Item href="/logout" style={{ backgroundColor: '#014E58', color:'white' }}>Sign Out</NavDropdown.Item>
                            
                    </NavDropdown>
                </>
            ) : (
                <>
                    <Nav.Link href="login" className="text-dark" style={{color: '#014E58'}}>Sign In</Nav.Link>

                    <Nav.Link href="signup" className="text-dark font-weight-bold" style={{color: '#014E58'}}>Sign Up</Nav.Link>
                </>            
            )}          
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default SignedInNav