import React from "react";
import { NavBar } from "react-storybook-library-v3";
import { navbarLinks } from "../data.js";
import logoLight from "../assets/logo-bt-wordmark.svg";
import logoDark from "../assets/logo-bt-wordmark-white.svg";

const NavbarComponent = () => {
  return (
    <NavBar links={navbarLinks} logoLight={logoLight} logoDark={logoDark} />
  );
};

export default NavbarComponent;
