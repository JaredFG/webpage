/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Portfolio2 from "./Components/Portfolio2";
import Portfolio3 from "./Components/Portfolio3";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Jared Flores",
  title: "Game Developer & Frontend Developer",
  email: "floresjared156@gmail.com",
  gitHub: "JaredFG",
  linkedIn: "jared-abraham-flores-guarneros-5515a0191/",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main" style={{ overflow: "hidden", overflowY: "hidden" }}>
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio3 />
      <Portfolio2 />

      <Portfolio />

      <Footer
        {...siteProps}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
    </div>
  );
};

export default App;
