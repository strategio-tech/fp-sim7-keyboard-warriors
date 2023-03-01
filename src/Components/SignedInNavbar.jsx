import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import serenity from "../assets/Yoga-Logo.png";
import profileImage from "../assets/Luuh.jpg";
import addVideoImage from "../assets/addVideo.png";

const SignedInNav = () => {
    const [loggedIn, setloggedIn] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("token")) {
            setloggedIn(true);
        }
    }, [localStorage.getItem("token")]);
    console.log(loggedIn);

    let navigate = useNavigate();

    return (
        <div>
            <Navbar style={{ backgroundColor: "#EDFEFF" }} variant="dark">
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

                    <Nav className="d-flex gap-4 align-items-center">
                        {loggedIn ? (
                            <>
                                <Link
                                    to="/home"
                                    className="text-dark fw-bold c-nav-link"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/feed"
                                    className="text-dark c-nav-link"
                                >
                                    Videos
                                </Link>

                                <Link to="/">
                                    <img
                                        src={addVideoImage}
                                        height="30"
                                        className=""
                                        alt="Add"
                                    />
                                </Link>

                                <NavDropdown
                                    
                                    align="end"
                                    title={
                                        <img
                                            src={profileImage}
                                            height="30"
                                            width="30"
                                            className="rounded-circle mr-2 align-self-center"
                                            alt="Profile"
                                        />
                                    }
                                >
                                    <NavDropdown.Item
                                        style={{
                                            backgroundColor: "#014E58",
                                            color: "white",
                                        }}
                                    >
                                        Your profile
                                    </NavDropdown.Item>

                                    <NavDropdown
                                        title="Playlists"
                                        style={{ backgroundColor: "#014E58" }}
                                    >
                                        <NavDropdown.Item
                                            style={{
                                                backgroundColor: "#014E58",
                                                color: "white",
                                            }}
                                        >
                                            <Link to={""}>Playlist 1</Link>
                                        </NavDropdown.Item>

                                        <NavDropdown.Item
                                            style={{
                                                backgroundColor: "#014E58",
                                                color: "white",
                                            }}
                                        >
                                            <Link to={""}>Playlist 2</Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown.Divider />

                                    <NavDropdown.Item
                                        style={{
                                            backgroundColor: "#014E58",
                                            color: "white",
                                        }}
                                    >
                                        <span
                                            className="link"
                                            onClick={() => {
                                                localStorage.removeItem(
                                                    "token"
                                                );
                                                setloggedIn(false);
                                                navigate("/home");
                                            }}
                                        >
                                            Sign Out
                                        </span>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </>
                        ) : (
                            <div>
                                <Navbar
                                    style={{ backgroundColor: "#EDFEFF" }}
                                    variant="dark"
                                >
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

                                        <Nav className="gap-4 d-flex align-items-center">
                                            <Link
                                                className="text-dark fw-bold c-nav-link"
                                                to={"/home"}
                                            >
                                                Home
                                            </Link>

                                            <Link
                                                className="text-dark c-nav-link"
                                                to={"/feed"}
                                            >
                                                Videos
                                            </Link>

                                            <Link
                                                className="text-dark c-nav-link"
                                                to={"/login"}
                                            >
                                                Sign In
                                            </Link>

                                            <Link
                                                className="text-dark font-weight-bold c-nav-link c-nav-link-hero"
                                                to={"/signup"}
                                            >
                                                Sign Up
                                            </Link>
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
};

export default SignedInNav;
