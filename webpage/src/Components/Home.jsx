/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/mar.jpg";
import mario from "../images/mario3.gif";

const imageAltText = "mario bros";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="dark2">
      <img className="background" src={mario} alt="" />
      <div style={{ position: "absolute", top: "30%", left: "2rem", textShadow: "5px 5px black" }}>
        <h1 style={{ fontWeight: "bold", paddingLeft: "3rem" }}>{name}</h1>
        <h2 style={{ fontWeight: "bold", paddingLeft: "3rem" }}>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "8rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
