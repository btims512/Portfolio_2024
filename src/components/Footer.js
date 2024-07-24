// src/components/Footer.js
import React from "react";
import { Footer } from "react-storybook-library-v3";
import { ReactComponent as ReactIcon } from "../assets/icon-react.svg";
import { ReactComponent as DataIcon } from "../assets/icon-data.svg";
import { ReactComponent as JsIcon } from "../assets/icon-js.svg";

const FooterComponent = () => {
  return (
    <Footer>
      <div id="contact" className="icon-links">
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactIcon className="svg-icon" />
        </a>
        <a
          href="https://www.data.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DataIcon className="svg-icon" />
        </a>
        <a
          href="https://www.javascript.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <JsIcon className="svg-icon" />
        </a>
      </div>
    </Footer>
  );
};

export default FooterComponent;
