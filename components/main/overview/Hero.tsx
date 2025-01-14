import React from "react";
import Typing from "./Typing";

const Hero: React.FC = () => {
  return (
    <div className="mt-4 lg:mt-6 relative">
      <img className="rounded-md" src="/images/hero.jpeg" alt="" />
      <div className="absolute bottom-0 left-8">
        <Typing />
      </div>
    </div>
  );
};

export default Hero;
