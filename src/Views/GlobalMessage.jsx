import React, { useEffect, useState } from "react";

const GlobalMessage = ({ forwardRef }) => {
    const [navHeight, setNavHeight] = useState(0)

    useEffect(()=>{
        setNavHeight(forwardRef.current.clientHeight);
    }, [forwardRef])
    
    return (
        <div
            className="container bg-dark text-light d-flex flex-column justify-content-center"
            style={{ height: `calc(100vh - ${navHeight}px)` }}
        >
            <h1 className="text-warning">
                The Backend for this Project is Down to Avoid Billing from AWS
            </h1>
            <section className="mt-2">
                <h5 className="mb-3">
                    You can still navigate through some parts of the website,
                    but you will <b className="text-danger capitaliz">not</b> be
                    able to:
                </h5>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-danger">
                        <span class="fa-solid fa-square-xmark me-2"></span>
                        Create an account
                    </li>
                    <li className="list-group-item list-group-item-danger">
                        <span class="fa-solid fa-square-xmark me-2"></span>Login
                    </li>
                    <li className="list-group-item list-group-item-danger">
                        <span class="fa-solid fa-square-xmark me-2"></span>
                        Upload Videos
                    </li>
                    <li className="list-group-item list-group-item-danger">
                        <span class="fa-solid fa-square-xmark me-2"></span>Watch
                        Videos
                    </li>
                </ul>
            </section>

            <section className="mt-5">
                <h4>
                    You can find more about this project here: {" "}
                    <a href="https://github.com/strategio-tech/fp-sim7-keyboard-warriors" target="_blank">
                        https://github.com/strategio-tech/fp-sim7-keyboard-warriors
                    </a>
                </h4>
            </section>
            <section className="mt-5">
                <h1 style={{color: "#00FF7B"}}>
                    Thank you for taking the time to give us a visit!!
                </h1>
            </section>
        </div>
    );
};

export default GlobalMessage;
