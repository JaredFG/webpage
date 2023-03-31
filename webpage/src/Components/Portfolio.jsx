/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

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
import image from "../images/ocean.gif";
import example from "../images/rapture.jpg";
import fish from "../images/fish.gif";
import fish2 from "../images/fish2.gif";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "RPA Developer @ Ichi Services",
    description:
      "Part of the team of virtual robot developers to automate processes using tools like Rocket Bot, Power Automate as an in-plant at AT&T. Data is extracted from various sources and different formats in order to be validated and deliver a product that facilitates analysis and decision making.",
  },
  {
    title: "Marketing assistant @ Laboratorios Grossman",
    description:
      "In charge of the Digital Project for the Ultra brand Campaign using social networks Content development for Bausch + Lomb's Mexico web page Part of the fifth generation of the project 'Bausch Health Teens' in which a business event was organized for the collection of donations to help of a children's home",
  },
  {
    title: "IT assistant @ Laboratorios Grossman",
    description:
      "Responsible for the preparation and configuration of computers for employees and fellows. Companion of the employee through the process of creating passwords for the double authentication of the business network. Part of the second generation of the project 'Busch Health Teens' In which we made a collection of donations for a social action which was a visit and donation of funds to an asylum for older adults",
  },
];

const Portfolio = () => {
  return (
    <section className="dark" id="Work Experience">
      <h2 style={{ fontWeight: "bold", fontSize: "3.5rem", color: "white" }}>
        Work Experience
      </h2>
      <img className="background" src={image} alt="" />
      <div
        style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}
      >
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={fish}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              paddingLeft: "1rem",
            }}
            alt={imageAltText}
          />
          <img
            src={fish2}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              paddingLeft: "1rem",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container2">
          {projectList.map((project) => (
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
              className="box"
              key={project.title}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3
                  style={{
                    flexBasis: "40px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  {project.title}
                </h3>
              </a>
              <p style={{ color: "white" }} className="small">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
