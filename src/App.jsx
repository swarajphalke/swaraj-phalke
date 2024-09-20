import React from "react";
import Navbar from "../src/component/Navbar";
import Bio from "../src/component/Bio";
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Blog from "./component/Blog";

export default function App() {
  return (
    <div>
      <Navbar />
      <Bio />
      <About />
      <Projects />
      <Contact />
      <Blog />

      <br /><br /><br />
    </div>
  );
}
