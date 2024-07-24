import React from "react";
import { TechPageLayout } from "react-storybook-library-v3";
import { technologiesData } from "../data.js";
import { getIconComponent } from "../utils.js";

const TechnologiesComponent = () => {
  return (
    <div id="tech" className="svg-container">
      <TechPageLayout
        title="Technologies"
        iconCards={technologiesData.map((tech) => ({
          ...tech,
          icon: getIconComponent(tech.icon),
        }))}
      />
    </div>
  );
};

export default TechnologiesComponent;
