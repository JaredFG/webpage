/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(10px)",
        padding: "1rem",
        top: 0,
        width: "100vw",
        zIndex: 10,
      }}
    >
      <a href="#home">Home</a>
      <a href="#about">Education</a>
      <a href="#Games Portfolio">Games Portfolio</a>
      <a href="#Major School Projects">Major School Projects</a>
      <a href="#Work Experience">Work Experience</a>
      <a href="#footer">Contact</a>
    </div>
  );
};

export default Header;
