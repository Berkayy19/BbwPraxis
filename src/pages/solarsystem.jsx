import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import mercuryImage from "../pictures/mercury.jpg";
import marsImage from "../pictures/mars.jpg";
import venusImage from "../pictures/venus.jpg";
import earthImage from "../pictures/earth.jpg";
import neptuneImage from "../pictures/neptune.jpg";
import uranusImage from "../pictures/uranus.jpg";
import saturnImage from "../pictures/saturn.jpg";
import jupiterImage from "../pictures/jupyter.jpg";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

export default function SolarSystem() {
    const planets = [
        {
            name: "Mercury",
            description:
                "Mercury, the smallest and innermost planet in the solar system, is named after the Roman messenger god due to its swift orbit around the Sun. It is a rocky, terrestrial planet with a heavily cratered surface, resembling Earth’s Moon. Mercury's lack of atmosphere causes extreme temperature variations, from scorching days to freezing nights. Known since ancient times, its rapid movement in the sky fascinated early astronomers. The planet has a large iron core, which generates a weak magnetic field. The Mariner 10 mission in the 1970s was the first to fly by Mercury, revealing its cratered landscape. Today, Mercury remains a subject of intrigue due to its unique geological history.",
            image: mercuryImage,
            color: "#a8a8a8",
        },
        {
            name: "Venus",
            description:
                "Venus, often called Earth’s twin due to its similar size, is shrouded in thick clouds of sulfuric acid. Its surface is a hellish landscape of volcanic plains and temperatures hot enough to melt lead, caused by a runaway greenhouse effect. Named after the Roman goddess of love and beauty, Venus has been observed since ancient times as the 'morning star' or 'evening star.' The Soviet Venera missions in the mid-20th century were the first to land on Venus and transmit images back to Earth. Beneath its hostile atmosphere, Venus rotates slowly and in the opposite direction to most planets. Despite its challenges, scientists study Venus to understand the potential fate of Earth’s climate. Its surface remains a mystery, partially mapped by radar from space probes like NASA’s Magellan.",
            image: venusImage,
            color: "#f4a460",
        },
        {
            name: "Earth",
            description:
                "Earth is the only planet known to support life, thanks to its liquid water, stable atmosphere, and magnetic field. Formed over 4.5 billion years ago, it has undergone dramatic changes, including ice ages and mass extinctions. Earth's composition includes a solid crust, a viscous mantle, and a dynamic core generating its magnetic field. Ancient civilizations have revered it as the center of the universe, but modern science revealed its place in the solar system. Our planet’s diverse ecosystems, from oceans to forests, harbor millions of species. Human exploration of space started here, with the Apollo missions offering the first view of Earth from the Moon. Earth continues to be studied extensively to better understand its changing climate and geological activity.",
            image: earthImage,
            color: "#0077be",
        },
        {
            name: "Mars",
            description:
                "Mars, the 'Red Planet,' gets its striking color from iron oxide, or rust, on its surface. Named after the Roman god of war, it has captivated humanity for centuries as a potential home for extraterrestrial life. Mars has polar ice caps, extinct volcanoes like Olympus Mons, and the largest canyon in the solar system, Valles Marineris. Early telescopic observations led to speculation about 'canals,' sparking fantasies of Martian civilizations. Robotic explorers like NASA's rovers and the Perseverance mission have revealed evidence of ancient riverbeds, suggesting Mars once had liquid water. Mars' thin atmosphere is mostly carbon dioxide, making it uninhabitable for humans without advanced technology. As exploration continues, Mars remains central to discussions about human colonization.",
            image: marsImage,
            color: "#d9534f",
        },
        {
            name: "Jupiter",
            description:
                "Jupiter, the largest planet in the solar system, is a gas giant made primarily of hydrogen and helium. It has been observed since ancient times and was named after the king of the Roman gods. Its iconic Great Red Spot is a massive storm that has raged for centuries. Jupiter has a strong magnetic field and at least 92 known moons, including Ganymede, the largest moon in the solar system. Galileo Galilei's discovery of its four largest moons in 1610 revolutionized our understanding of celestial mechanics. The Voyager and Juno missions have provided unprecedented insights into its atmosphere and structure. Jupiter’s immense gravity influences the solar system, protecting Earth from potential asteroid impacts.",
            image: jupiterImage,
            color: "#f39c12",
        },
        {
            name: "Saturn",
            description:
                "Saturn is renowned for its stunning ring system, composed of ice particles, rocks, and dust. Named after the Roman god of agriculture, Saturn has been a subject of wonder since ancient times. It is the second-largest planet and a gas giant primarily made of hydrogen and helium. Galileo’s early observations of Saturn in 1610 were limited, but modern missions like Cassini revealed its intricate rings and dozens of moons. Titan, Saturn’s largest moon, has a thick atmosphere and liquid methane lakes, sparking interest in its potential for life. Despite its size, Saturn is the least dense planet, light enough to float in water. Its mesmerizing beauty and scientific mysteries make it a favorite target for astronomers.",
            image: saturnImage,
            color: "#f7dc6f",
        },
        {
            name: "Uranus",
            description:
                "Uranus is a pale blue-green planet, tilted dramatically on its side, likely due to a massive collision in its past. Discovered by William Herschel in 1781, it was the first planet found with a telescope, breaking ancient assumptions of the solar system's limits. Named after the Greek god of the sky, Uranus is an ice giant with a thick atmosphere of hydrogen, helium, and methane. Methane gives it its distinctive color, while its faint rings and moons add to its unique appearance. Uranus’ magnetic field is oddly tilted, further evidence of its violent history. The Voyager 2 spacecraft provided the only close-up images of Uranus in 1986, showing a relatively featureless surface. Scientists continue to study Uranus to understand ice giants and their role in planetary evolution.",
            image: uranusImage,
            color: "#00ced1",
        },
        {
            name: "Neptune",
            description:
                "Neptune, the farthest planet from the Sun, is a deep blue ice giant with supersonic winds. It was discovered in 1846 through mathematical predictions, rather than direct observation, a triumph of celestial mechanics. Named after the Roman god of the sea, its vivid color comes from methane in its atmosphere. Neptune has a dynamic weather system, including storms like the Great Dark Spot, discovered by Voyager 2. It has 14 known moons, the largest being Triton, which orbits in the opposite direction of the planet's rotation. Triton’s geysers of nitrogen hint at subsurface activity, making it a fascinating target for exploration. Neptune’s mysteries remind us of how little we know about the outer solar system.",
            image: neptuneImage,
            color: "#4169e1",
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
                        Explore the Solar System
                    </h1>

                    {planets.map((planet, index) => (
                        <div
                            key={planet.name}
                            className="row align-items-center mb-5 planet-card"
                            style={{
                                display: "flex",
                                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                                gap: "20px",
                                width: "95%",
                                margin: "0 auto",
                            }}
                        >
                            {/* Image Section */}
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
                                    src={planet.image}
                                    alt={planet.name}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: "15px",
                                    }}
                                />
                            </div>

                            {/* Text Section */}
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
                                    borderLeft: "2px solid white", // Thin white line
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                            >
                                <h2
                                    style={{
                                        fontSize: "2rem",
                                        fontWeight: "bold",
                                        color: planet.color,
                                    }}
                                >
                                    {planet.name}
                                </h2>
                                <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>{planet.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
