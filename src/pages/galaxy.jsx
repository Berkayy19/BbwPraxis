import React, { useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import galaxyVideo from "../vid/vid.mp4"; // Import the video
import Navbar from "../components/navbar.jsx"; // Assuming Navbar is in the same folder

export default function Galaxy() {
    const videoRef = useRef(null);
    const playDirectionRef = useRef(0); // -1 for backward, 1 for forward, 0 for no play
    const frameRate = useRef(60); // Target frame rate for smooth playback

    const handleKeyDown = (event) => {
        const video = videoRef.current;

        if (!video) return;

        if (event.key.toLowerCase() === "s") {
            playDirectionRef.current = 1; // Forward
        } else if (event.key.toLowerCase() === "w") {
            playDirectionRef.current = -1; // Backward
        }
    };

    const handleKeyUp = (event) => {
        if (event.key.toLowerCase() === "s" || event.key.toLowerCase() === "w") {
            playDirectionRef.current = 0; // Stop playback on key release
        }
    };

    const updateVideoPlayback = () => {
        const video = videoRef.current;

        if (video) {
            const duration = video.duration;
            const increment = duration / (15 * frameRate.current); // Smooth increments to match 15 key presses

            if (playDirectionRef.current === 1) {
                video.currentTime = Math.min(video.currentTime + increment, video.duration);
            } else if (playDirectionRef.current === -1) {
                video.currentTime = Math.max(video.currentTime - increment, 0);
            }
        }

        requestAnimationFrame(updateVideoPlayback); // Continuously update playback
    };

    useEffect(() => {
        // Start video update loop
        requestAnimationFrame(updateVideoPlayback);

        // Add event listeners for key presses
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            // Clean up event listeners
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    return (
        <>
            <Navbar />
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    backgroundColor: "black",
                    zIndex: -1,
                }}
            >
                <video
                    ref={videoRef}
                    src={galaxyVideo}
                    type="video/mp4"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // Ensure the video fills the screen
                    }}
                    muted
                />
            </div>
        </>
    );
}
