"use client";
import { ReactTyped } from "react-typed";

const Typing = () => (
  <div>
    <h2 className="text-2xl lg:text-5xl font-bold mt-8">
      I'm{" "}
      <ReactTyped
        strings={[
          "Programmer",
          "Software Developer",
          "Engineer",
          "Web Developer",
        ]}
        typeSpeed={40}
        backSpeed={50}
        backDelay={2000}
        loop
      />
    </h2>
    <br />
    {/* 
    <ReactTyped
      strings={[
        "Search for products",
        "Search for categories",
        "Search for brands",
      ]}
      typeSpeed={40}
      backSpeed={50}
      attr="placeholder"
      loop
    >
      <input type="text" />
    </ReactTyped> */}
  </div>
);

export default Typing;
