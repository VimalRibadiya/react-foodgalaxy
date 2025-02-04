import React from "react";
import About_banner from "./About/About_banner";
import About_service from "./About/About_service";
import Deliver_area from "./Home/Deliver_area";
import Portfolio from "./Home/Portfolio";
import Brand_area from "./Home/Brand_area";
import Team_area from "./Home/Team_area";


const About = () => {
  return (
    <>
      <About_banner/>
      <About_service/>
      <Deliver_area />
      <Portfolio />
      <Brand_area  />
      <Team_area />
    </>
  );
};

export default About;
