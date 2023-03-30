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
import pixel from "../images/logo.png";
import example from "../images/descargar.jpg";
import lat from "../images/lat.jpeg";
import grad from "../images/grad.jpg";
import space from "../images/space.gif";
import bk from "../images/nk.jpeg";
import ibm from "../images/ibm.png";
import coding from "../images/coding.png";
import fb from "../images/fb.jpg";
const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Pixel Borregos",
    description:
      "Project part of the innovation gym of the Tecnologico de Monterrey focused on the development of video games and the diffusion of the industry among students.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
    image: pixel,
  },
  {
    title: "Concentration in Game Development capstone project",
    description:
      "Development of a 2D video game called heist breakout with a multiplayer system, documentation such as a GDD document and an MVP for the analysis and planning of a video game as well as a distribution through itch.io to test and receive feedback.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
    image: lat,
  },
  {
    title: "Full stack solution using Amazon Connect",
    description:
      "Creation of a full stack application that uses the Amazon AWS modules in order to create an application that can provide a virtual call center where all the information can be easily accessible and can help reducing operating expenses and increase sales in conjunction with Amazon.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
    image: bk,
  },
  {
    title: "Traffic intersection model with agents using IBM Cloud ",
    description:
      "Creation of an optimization model for road intersections in Unity, using multi-agents to simulate the interaction between drivers on the road. The simulation utilizes a model that optimizes the behavior of traffic lights and communicates with other traffic lights to improve the traffic flow of the roads",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
    image: ibm,
  },
  {
    title: "Video game Development-Movimiento STEM using Unity",
    description:
      "Development of a video game focused on generating interest towards the STEM community and their skills, allowing the administrator to monitor progress through the database hosted on AWS.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
    image: coding,
  },
  {
    title: "Above and Beyond Computer Science (ABCS) Participant",
    description:
      "I attended the ABCS of facebook where they gave us classes and tips for code development, as well as tests with interviewers who met weekly to see improvements and give us recommendations.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
    image: fb,
  },
];

const Portfolio2 = () => {
  return (
    <section className="dark" id="Major School Projects">
      <h2 style={{ fontWeight: "bold", fontSize: "3.5rem", color: "white" }}>
        Major School Projects
      </h2>
      <img className="background" src={space} alt="" />
      <div style={{ paddingTop: "3rem", alignItems: "center" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center", alignItems: "center" }}></div>
        <div className="card">
          {projectList.map((project) => (
            <div
              style={{
                alignItems: "center",
                backgroundImage: `url(${grad})`,
                paddingBottom: "2rem",
              }}
              className="box2"
              key={project.title}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px", marginBottom: "2rem", color: "white" }}>
                  {project.title}
                </h3>
              </a>
              <div
                style={{
                  width: "13rem",
                  height: "13rem",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <img
                  style={{
                    maxWidth: "13rem",
                    maxHeight: "13rem",
                    width: "auto",
                    height: "auto",
                    alignItems: "center",
                    color: "white",
                  }}
                  src={project.image}
                  alt=""
                />
              </div>

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

export default Portfolio2;
