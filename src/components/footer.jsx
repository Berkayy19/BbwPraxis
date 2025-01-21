import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "#1a1a1a",
                color: "white",
                padding: "20px 0",
                position: "relative",
                bottom: 0,
                width: "100%",
            }}
        >
            <div className="container">
                <div className="row">
                    {/* Navigation Links */}
                    <div className="col-md-6 mb-3">
                        <h5>Navigation</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a
                                    href="/galaxy"
                                    className="text-decoration-none text-light"
                                    style={{ transition: "color 0.3s ease" }}
                                    onMouseEnter={(e) => e.currentTarget.classList.add("text-warning")}
                                    onMouseLeave={(e) => e.currentTarget.classList.remove("text-warning")}
                                >
                                    Galaxy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/earth"
                                    className="text-decoration-none text-light"
                                    style={{ transition: "color 0.3s ease" }}
                                    onMouseEnter={(e) => e.currentTarget.classList.add("text-warning")}
                                    onMouseLeave={(e) => e.currentTarget.classList.remove("text-warning")}
                                >
                                    Earth
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/solarsystem"
                                    className="text-decoration-none text-light"
                                    style={{ transition: "color 0.3s ease" }}
                                    onMouseEnter={(e) => e.currentTarget.classList.add("text-warning")}
                                    onMouseLeave={(e) => e.currentTarget.classList.remove("text-warning")}
                                >
                                    Solar System
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/moon"
                                    className="text-decoration-none text-light"
                                    style={{ transition: "color 0.3s ease" }}
                                    onMouseEnter={(e) => e.currentTarget.classList.add("text-warning")}
                                    onMouseLeave={(e) => e.currentTarget.classList.remove("text-warning")}
                                >
                                    Moon
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Creator Details */}
                    <div className="col-md-6">
                        <h5>About the Creator</h5>
                        <ul className="list-unstyled">
                            <li>
                                <strong>Name:</strong> Berkay Cinoglu
                            </li>
                            <li>
                                <strong>Phone:</strong> +41 78 630 50 72
                            </li>
                            <li>
                                <strong>Email:</strong>{" "}
                                <a
                                    href="mailto:berkay.cinoglu@stud.kbw.ch"
                                    className="text-decoration-none text-light"
                                    style={{ transition: "color 0.3s ease" }}
                                    onMouseEnter={(e) => e.currentTarget.classList.add("text-warning")}
                                    onMouseLeave={(e) => e.currentTarget.classList.remove("text-warning")}
                                >
                                    berkay.cinoglu@stud.kbw.ch
                                </a>
                            </li>
                            <li>
                                <strong>GitHub:</strong>{" "}
                                <a
                                    href="https://github.com/Berkayy19"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-decoration-none text-light"
                                    style={{ transition: "color 0.3s ease" }}
                                    onMouseEnter={(e) => e.currentTarget.classList.add("text-warning")}
                                    onMouseLeave={(e) => e.currentTarget.classList.remove("text-warning")}
                                >
                                    Berkayy19
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center mt-4">
                    <p className="mb-0">
                        © {new Date().getFullYear()} Berkay Cinoglu. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
