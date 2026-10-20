// Hero.js
import React from "react";
import { Hero, Button } from "react-storybook-library-v3";
import { heroData } from "../data.js";

const HeroComponent = () => {
  return (
    <Hero
      header={heroData.header}
      subtitle={heroData.subtitle}
      picture={heroData.picture}
      button={
        <Button
          label={heroData.buttonLabel}
          onClick={() =>
            window.open(
              `${process.env.PUBLIC_URL}/Benjamin_Tims_Resume.pdf`,
              "_blank"
            )
          }
        />
      }
    />
  );
};

export default HeroComponent;
