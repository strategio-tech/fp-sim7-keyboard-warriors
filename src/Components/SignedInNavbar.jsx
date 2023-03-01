import React,{useState, useEffect} from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import serenity from '../assets/Yoga-Logo.png';
import profileImage from '../assets/Luuh.jpg';
import addVideoImage from '../assets/addVideo.png'

const SignedInNav = () => {
    const[loggedIn, setloggedIn] = useState(false)
    useEffect(()=> {
        if(localStorage.getItem('token')){
            setloggedIn(true)
        }
    },[localStorage.getItem('token')])
    console.log(loggedIn)

    let navigate = useNavigate()

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

            {loggedIn ? (
                <>
                <Nav.Link href="/" className="text-dark font-weight-bold" style={{color: '#014E58'}}>Home</ Nav.Link>
                <Nav.Link href="#videos" className="text-dark" style={{color: '#014E58'}}>Videos</Nav.Link>
                
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
                            <NavDropdown.Item style={{ backgroundColor: '#014E58', color:'white' }}>Your profile</NavDropdown.Item>

                            <NavDropdown title="Playlists" style={{ backgroundColor: '#014E58' }}> 
                                <NavDropdown.Item  style={{ backgroundColor: '#014E58', color:'white' }}><Link to={''}>Playlist 1</Link></NavDropdown.Item>

                                <NavDropdown.Item style={{ backgroundColor: '#014E58', color:'white' }}><Link to={''}>Playlist 2</Link></NavDropdown.Item>

                            </NavDropdown>
                            <NavDropdown.Divider/>

                            <NavDropdown.Item style={{ backgroundColor: '#014E58', color:'white' }}><span className='link' onClick={()=>{
                                localStorage.removeItem('token')
                                setloggedIn(false)
                                navigate('/home')
                            }}>Sign Out</span></NavDropdown.Item>
                            
                    </NavDropdown>
                </>
            ) : (
                <div>
                    <Navbar style={{ backgroundColor: '#EDFEFF' }} variant="dark">
                        <Container className="px-3">

                        <Navbar.Brand href="#home">
                            {/* <img 
                            src={serenity}
                            height="70"
                            width="100"
                            className="d-inline-block align-top"
                            alt="Serenity Logo"

                            /> */}
                        </Navbar.Brand>
                        
                        <Nav className="mr-auto">
                            <Nav.Link className="text-dark font-weight-bold" style={{color: '#014E58'}}><Link to={'/home'}>Home</Link></Nav.Link>

                            <Nav.Link className="text-dark" style={{color: '#014E58'}}><Link to={'/feed'}>Videos</Link></Nav.Link>

                            <Nav.Link className="text-dark" style={{color: '#014E58'}}><Link to={'/login'}>Sign In</Link></Nav.Link>

                            <Nav.Link className="text-dark font-weight-bold" style={{color: '#014E58'}}><Link to={'/signup'}>Sign Up</Link></Nav.Link>
                        </Nav>

                        </Container>
                    </Navbar>
                    </div>     
            )}          
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default SignedInNav