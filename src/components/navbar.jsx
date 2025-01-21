import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import resultImage from "../pictures/Earth_Western_Hemisphere_transparent_background.png";

export default function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg fixed-top"
            style={{
                backgroundColor: "rgba(50, 50, 50, 0.9)", // Dark grey-black background
                backdropFilter: "blur(10px)", // Blur effect
                borderRadius: "15px", // Rounded corners
                padding: "10px 20px",
                maxWidth: "80%", // Restrict width
                margin: "10px auto", // Center it horizontally with margin
            }}
        >
            <div className="container-fluid">
                <a className="navbar-brand" href="/galaxy">
                    <img
                        src={resultImage}
                        alt="Logo"
                        style={{ width: "50px", height: "50px" }}
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul
                        className="navbar-nav w-100 justify-content-evenly"
                        style={{
                            fontSize: "1.25rem",
                            fontWeight: "bold",
                            color: "white", // White text for nav links
                        }}
                    >
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="/galaxy"
                                style={{ color: "white" }} // Ensure individual links have white text
                            >
                                Galaxy
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="/earth"
                                style={{ color: "white" }} // White text for link
                            >
                                Earth
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="/solarsystem"
                                style={{ color: "white" }} // White text for link
                            >
                                Solar System
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="/moon"
                                style={{ color: "white" }} // White text for link
                            >
                                Moon
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
