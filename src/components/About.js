import React from "react";
import { About } from "react-storybook-library-v3";
import { aboutData } from "../data.js";

const AboutComponent = () => {
  return (
    <div id="about">
      <About
        title={aboutData.title}
        text={aboutData.text}
        icon={<img src={aboutData.icon} alt="Ben's Icon" />}
      />
    </div>
  );
};

export default AboutComponent;
