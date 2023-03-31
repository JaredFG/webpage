import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import mario from "../images/mario3.gif";

const imageAltText = "mario bros";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="dark2">
      <img className="background" src={mario} alt="" />
      <div className="acomodo">
        <div style={{ padding: "1rem" }}>
          <h1 style={{ fontWeight: "bold" }}>{name}</h1>
          <h2 style={{ fontWeight: "bold" }}>{title}</h2>
        </div>
      </div>
      <div
        className="arrow"
        style={{
          position: "absolute",
          bottom: "4rem",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          width: "100%",
        }}
      >
        <img
          src={arrowSvg}
          style={{ height: "3rem", width: "3rem" }}
          alt={imageAltText}
        />
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
