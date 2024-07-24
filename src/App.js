import React from "react";
import { PageLayout } from "react-storybook-library-v3";
import "./global.scss";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import About from "./components/About";
import FooterComponent from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <PageLayout
        navbar={<NavBar />}
        footer={<FooterComponent />}
        hero={<Hero />}
        projects={<Projects />}
        technologies={<Technologies />}
        about={<About />}
      />
      <Contact />
    </>
  );
}

export default App;
