import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import fullMoonImage from "../pictures/moon/full.jpg";
import waningGibbousImage from "../pictures/moon/achtzig.jpg";
import lastQuarterImage from "../pictures/moon/halfr.jpg";
import waningCrescentImage from "../pictures/moon/zwanzig.jpg";
import timelapseVideo from "../pictures/moon/vid.mp4";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

export default function MoonPhases() {
    const moonPhases = [
        {
            name: "Full Moon",
            image: fullMoonImage,
            description:
                "The Full Moon occurs when the Earth is directly between the Sun and the Moon, allowing sunlight to fully illuminate the Moon's face. Historically, this phase has been associated with harvests, celebrations, and mythologies. Ancient cultures believed the Full Moon influenced tides, animals, and even human behavior. Its perfect illumination provides excellent opportunities for stargazers and photographers to observe its craters and seas in detail.",
        },
        {
            name: "Waning Gibbous",
            image: waningGibbousImage,
            description:
                "After the Full Moon, the Waning Gibbous phase begins as the Moon gradually loses its illumination. This phase is named 'gibbous,' meaning swollen, as more than half of the Moon is still visible. The Moon moves farther from the Earth-Sun alignment, casting longer shadows on its surface. Ancient astronomers used this phase to track the passage of time and measure the Moon's orbit.",
        },
        {
            name: "Quarter Moons (First and Last)",
            image: lastQuarterImage,
            description:
                "Quarter Moons occur when half of the Moon is illuminated. The First Quarter follows the Waxing Crescent, and the Last Quarter precedes the Waning Crescent. These phases are a result of the Moon's 90-degree angle relative to the Sun and Earth. Early astronomers, such as Ptolemy, used quarter phases to map the Moon's orbit. They are excellent for observing the Moon's terrain, as the interplay of light and shadow highlights its craters and mountain ranges.",
        },
        {
            name: "Waning Crescent",
            image: waningCrescentImage,
            description:
                "The Waning Crescent is the final visible phase before the New Moon. Only a small sliver of the Moon is illuminated as it approaches alignment with the Sun. In history, this phase was often associated with endings or transitions in many cultures. The crescent shape has been a symbol in art, religion, and astronomy, particularly in Islamic culture where it represents the lunar calendar.",
        },
    ];

    return (
        <>
            <Navbar />
            <div
                style={{
                    backgroundColor: "black",
                    color: "white",
                    minHeight: "100vh",
                    padding: "20px",
                    fontFamily: "'Roboto', sans-serif",
                }}
            >
                <div
                    className="container"
                    style={{
                        marginTop: "7rem",
                        maxWidth: "1620px",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    <h1
                        className="text-center mb-5"
                        style={{
                            fontSize: "3rem",
                            fontWeight: "bold",
                            letterSpacing: "2px",
                            color: "#fff",
                            textShadow: "0px 4px 8px rgba(255, 255, 255, 0.7)",
                        }}
                    >
                        The Phases of the Moon
                    </h1>

                    <div
                        className="video-container text-center mb-5"
                        style={{
                            overflow: "hidden",
                            borderRadius: "15px",
                            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.8)",
                            maxWidth: "80%",
                            margin: "0 auto",
                        }}
                    >
                        <video
                            src={timelapseVideo}
                            controls
                            style={{
                                width: "100%",
                                borderRadius: "15px",
                                outline: "none",
                            }}
                        />
                        <p className="mt-3" style={{ fontSize: "1.2rem" }}>
                            This timelapse captures the Moon's journey from east to west across the night sky, showcasing its slow but steady movement relative to the stars.
                        </p>
                    </div>

                    {moonPhases.map((phase, index) => (
                        <div
                            key={phase.name}
                            className="row align-items-center phase-card mb-5"
                            style={{
                                display: "flex",
                                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                                gap: "20px",
                                width: "95%",
                                margin: "0 auto",
                            }}
                        >
                            <div
                                className="image-container"
                                style={{
                                    flex: "1 1 40%",
                                    overflow: "hidden",
                                    borderRadius: "15px",
                                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.8)",
                                    transition: "transform 0.3s ease",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                            >
                                <img
                                    src={phase.image}
                                    alt={phase.name}
                                    style={{
                                        width: "100%",
                                        height: "250px",
                                        objectFit: "cover",
                                        borderRadius: "15px",
                                    }}
                                />
                            </div>

                            <div
                                className="text-container"
                                style={{
                                    flex: "1 1 50%",
                                    background: "rgba(255, 255, 255, 0.1)",
                                    borderRadius: "15px",
                                    padding: "30px",
                                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.8)",
                                    transition: "transform 0.3s ease",
                                    cursor: "pointer",
                                    borderLeft: "2px solid white",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                            >
                                <h2
                                    style={{
                                        fontSize: "2rem",
                                        fontWeight: "bold",
                                        color: "#fff",
                                    }}
                                >
                                    {phase.name}
                                </h2>
                                <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                                    {phase.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
