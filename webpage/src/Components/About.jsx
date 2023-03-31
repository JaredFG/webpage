import React from "react";
import cave from "../images/caves.gif";

const imageAltText = "mario bros ";

const description =
  "I'm a Game Developer student studying at Tec de Monterrey. I like making unique experiences through games and web applications.";

const skillsList = [
  "Web design",
  "User experience",
  "Game development",
  "Unity 2D and 3D",
  "Multiplayer",
  "User Interface",
];

const detailOrQuote =
  "Whether I'm playing a video game or working on the frontend of a project, my attention to detail and love for creating immersive experiences is always at the forefront of my mind.";

const About = () => {
  return (
    <section className="whiteDark" id="about">
      <img className="background2" src={cave} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul className="skills-list">
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
