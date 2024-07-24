// utils.js
import React from "react";
import { ReactComponent as ReactIcon } from "./assets/icon-react.svg";
import { ReactComponent as DataIcon } from "./assets/icon-data.svg";
import { ReactComponent as JsIcon } from "./assets/icon-js.svg";

export const getIconComponent = (iconName) => {
  switch (iconName) {
    case "ReactIcon":
      return <ReactIcon className="svg-icon" />;
    case "DataIcon":
      return <DataIcon className="svg-icon" />;
    case "JsIcon":
      return <JsIcon className="svg-icon" />;
    default:
      return null;
  }
};
