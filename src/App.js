import React from "react";
import { Footer, PageLayout } from "react-storybook-library-v3";
import "./global.scss";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import About from "./components/About";

function App() {
  return (
    <PageLayout
      navbar={<NavBar />}
      footer={<Footer />}
      hero={<Hero />}
      projects={<Projects />}
      technologies={<Technologies />}
      about={<About />}
      contact={
        <div id="contact">
          <p>Contact section content goes here</p>
        </div>
      }
    />
  );
}

export default App;
