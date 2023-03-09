import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import serenity from "../assets/logowithbackground.png";
import profileImage from "../assets/Luuh.jpg";
import addVideoImage from "../assets/addVideo.png";

const SignedInNav = ({loggedIn, setloggedIn, forwardRef}) => {
    useEffect(() => {
        if (localStorage.getItem("token")) {
            setloggedIn(true);
        }
    }, [localStorage.getItem("token")]);
    console.log(loggedIn);

    let navigate = useNavigate();

    return (
        <Navbar
            style={{ backgroundColor: "#EDFEFF", width: "100vw" }}
            className="col-12"
            variant="dark"
            expand="sm"
            ref={forwardRef}
        >
            <Container className="px-3">
                <Navbar.Brand href="/home">
                    <Link to={"/home"}>
                        <img
                            src={serenity}
                            height="70"
                            width="100"
                            className="d-inline-block align-top"
                            alt="Serenity Logo"
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="basic-navbar-toggle"
                />

                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="d-sm-flex justify-content-end"
                >
                    <Nav>
                        {loggedIn ? (
                            <>
                                <Nav.Link
                                    href="/"
                                    className="text-dark font-weight-bold c-nav-link"
                                >
                                    Home
                                </Nav.Link>

                                <Nav.Link
                                    href="/feed"
                                    className="text-dark c-nav-link"
                                >
                                    Videos
                                </Nav.Link>

                                <Nav.Link href="/upload">
                                    <img
                                        src={addVideoImage}
                                        height="30"
                                        className=""
                                        alt="Add"
                                    />
                                </Nav.Link>

                                <NavDropdown
                                    title={
                                        <img
                                            src={profileImage}
                                            height="30"
                                            width="30"
                                            className="rounded-circle mr-2"
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
                                        style={{
                                            backgroundColor: "#014E58",
                                        }}
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
                            <Nav className="gap-4 d-flex align-items-center">
                                <Nav.Link>
                                    <Link
                                        className="text-dark fw-bold c-nav-link"
                                        to={"/home"}
                                    >
                                        Home
                                    </Link>
                                </Nav.Link>
                                <Link
                                    className="text-dark c-nav-link"
                                    to={"/feed"}
                                >
                                    Videos
                                </Link>
                                <Nav.Link>
                                    <Link
                                        className="text-dark c-nav-link"
                                        to={"/login"}
                                    >
                                        Sign In
                                    </Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link
                                        className="text-dark font-weight-bold c-nav-link c-nav-link-hero"
                                        to={"/signup"}
                                    >
                                        Sign Up
                                    </Link>
                                </Nav.Link>
                            </Nav>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default SignedInNav;
