import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import backimage from "../assets/background.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPass] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/feed");
        }
    }, [localStorage.getItem("token")]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("https://api.serenitystream.tv/api/v2/auth/login", {
                username: userName,
                password: password,
            })
            .then((res) => {
                localStorage.setItem(
                    "token",
                    res.data.AuthenticationResult.AccessToken
                );
                navigate("/feed");
            })
            .catch((err) => {
                alert("Wrong User Name or Password", err);
            });
        //console.log(userName);
        // console.log(password);
        //dispatch(login(userName, password))
    };

    const formStyle = {
        textAlign: "center",
        minHeight: "600px",
        borderRadius: "5px",
        boxSizing: "border-box",
        padding: '3%',
        backgroundColor: "#014E58",
        display: "flex",
        flexDirection: "column",
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{ backgroundSize: 'cover',height: "100vh" }}
        >
            <img
                src={backimage}
                alt=""
                style={{
                    objectFit: "cover",
                    maxHeight: "100%",
                    minWidth: "100%",
                    opacity: " 0.55 ",
                    position: "absolute",                    
                    zIndex: "-500",
                }}
            />

            <div className="col-12 d-flex flex-column align-items-center">
                <h1
                    className="text-center py-4"
                    style={{
                        textAlign: 'center',
                        padding: '3%',
                        color: "#014E58",
                        top: '58px',
                        fontFamily: "Raleway",
                        fontWeight: "700",
                        fontSize: "48px",
                    }}
                >
                    Log In
                </h1>

                <form
                    className="col-12 col-sm-7 col-md-6 col-lg-5 col-xl-3 d-flex justify-content-around align-items-center"
                    onSubmit={handleSubmit}
                    style={formStyle}
                >
                    <fieldset className="d-flex flex-column gap-5">
                        <input
                            data-testid="userName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            type="userName"
                            placeholder="User Name"
                            className="gen-input"
                            id="userName"
                            name="userName"
                        />
                        <input
                            data-testid="password"
                            className="gen-input"
                            value={password}
                            onChange={(e) => setPass(e.target.value)}
                            type="password"
                            placeholder="Password"
                            id="password"
                            name="password"
                        />
                        <div className="link-next">
                            <Link to="/signup">
                                Don't have an account? Sign up here.{" "}
                            </Link>
                        </div>
                    </fieldset>
                    <Button
                        type="submit"
                        size="lg"
                        style={{
                            borderRadius: "60px",
                            background: "#EDFEFF",
                            color: "#05260A",
                            padding: "10px 48px",
                            fontWeight: "bold",
                            display: "block",
                        }}
                    >
                        Log In
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Login;
