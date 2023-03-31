import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

import example from "../images/binary.jpg";
import heist from "../images/heistWall.png";
import image from "../images/cave2.jpg";
import pixel from "../images/logo.png";
const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Heist Breakout",

    url: "https://latinumgames.itch.io/heist-breakout",
    image: heist,
  },
  {
    title: "Space Jumper",

    url: "https://jaredfg.itch.io/space-jump",
    image:
      "https://img.itch.zone/aW1hZ2UvMTEyNzkyOC82NTMxNDUzLnBuZw==/original/z%2FrzT7.png",
  },
  {
    title: "Insect Destroyer",

    url: "https://jaredfg.itch.io/insect-destroyer",
    image:
      "https://img.itch.zone/aW1hZ2UvMTEyMjIwMC82NDg4NzMxLnBuZw==/original/rEf7VA.png",
  },
  {
    title: "Spooky Jump",

    url: "https://jaredfg.itch.io/spooky-jump",
    image:
      "https://img.itch.zone/aW1hZ2UvMTExMzQ4MC82NDMzMTA1LnBuZw==/original/nRezTv.png",
  },
  {
    title: "Space Strikers",

    url: "https://jaredfg.itch.io/space-strikers",
    image:
      "https://img.itch.zone/aW1hZ2UvMTA0NzUzMi81OTg3ODg5LnBuZw==/original/cuFLOj.png",
  },
  {
    title: "Coding to the Exit",

    url: "https://jaredfg.itch.io/coding-to-the-exit",
    image:
      "https://img.itch.zone/aW1hZ2UvMTAyMDIwMC81ODE0OTU4LnBuZw==/original/%2FtASxh.png",
  },
];

const Portfolio3 = () => {
  return (
    <section
      style={{
        textShadow: "5px 5px black",
        color: "white",
        fontWeight: "bold",
        fontSize: "1.5rem",
      }}
      className="whiteDark"
      id="Games Portfolio"
    >
      <h2 className="tit">Games Portfolio</h2>
      <img className="background" src={image} alt="" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "6rem",
          justifyContent: "center",
        }}
      >
        <div
          style={{ maxWidth: "70%", alignSelf: "center", color: "white" }}
        ></div>
        <div className="card">
          {projectList.map((project) => (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
            >
              <div
                style={{
                  alignItems: "center",
                  backgroundImage: `linear-gradient(to bottom, transparent, black), url(${project.image})`,
                  backgroundSize: "cover",
                  paddingLeft: "2rem",
                }}
                className="box3"
              >
                <div>
                  <h3
                    style={{
                      flexBasis: "40px",
                      marginBottom: "2rem",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    <p
                      style={{
                        textShadow: "5px 5px black",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                      }}
                    >
                      {project.title}
                    </p>
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio3;
