import React from "react";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { RiGithubLine } from "react-icons/ri";

export default function Bio() {
  return (
    <div
      id="Bio"
      className=" hero-bg shadow-md px-8 pt-14 pb-12 md:px-40 md:pt-28  md:pb-24"
    >
      {/* Medium Screen */}
      <div className="hidden md:flex  justify-between ">
        <div>
          <p className="text-gray-800 text-4xl md:text-6xl font-bold mt-3">
            Full Stack Web Developer
          </p>
          <p className="text-gray-600 mt-6   text-xl tracking-wide">
            Hi, I'm Swaraj Phalke. A passionate Website Developer based <br />
            in Pune, India. 📍
          </p>
          <div className="flex gap-4 mt-5 ">
            <a
              href="https://www.linkedin.com/in/swaraj-phalke-b5539b220"
              className="text-4xl"
            >
              <PiLinkedinLogoBold />
            </a>
            <a href="https://github.com/SwarajPhalke" className="text-4xl">
              <RiGithubLine />
            </a>
          </div>
          <p className="mt-9">
            <a href="/resume/Swaraj_Phalke_Resume.pdf" target="_blank" className="bg-slate-800 text-white text-[16px] py-2 px-3 rounded-md">
              Download Resume
            </a>
          </p>
        </div>
        <div>
          <img className=" w-[400px] rounded-xl" src="/images/profile.jpg" />
        </div>
      </div>
      <div className="hidden md:flex items-center mt-24 gap-3">
        <div className="md:flex font-semibold items-center text-xl">
          Tech Stack &nbsp;&nbsp;<span className="mx-2">|</span>&nbsp;&nbsp;&nbsp;
          
        </div>
        {/* <div className="flex gap-8"> 
          <img src="/images/icons.svg" alt="" />
          <img src="/images/icons-2.svg" alt="" />
          <img src="/images/icons-3.svg" alt="" />
          <img src="/images/icons-4.svg" alt="" />
        </div> */}
        <div class="flex items-cneter justify-center md:justify-start flex-wrap gap-8 text-[17px]">
        ReactJS, ExpressJS, NodeJS, Java, TailwindCSS, Git and more..
        </div>
      </div>

      {/* Small Screen */}
      <div className=" md:hidden">
        <div className="flex justify-center">
          <img className=" w-[220px] rounded-xl" src="/images/profile.jpg" />
        </div>
        <div className="text-center pt-9">
          <p className="text-gray-800 text-3xl font-bold mt-3 ">
            Front-End React Developer
          </p>
          <p className="text-gray-600 mt-5 text-[18px] tracking-wide">
            Hi, I'm Swaraj Phalke. A passionate Software Developer based
            in Pune, India. 📍
          </p>
          <div className="flex justify-center items-center gap-3 mt-5 ">
            <a
              href="https://www.linkedin.com/in/swaraj-phalke-b5539b220"
              className="text-3xl"
            >
              <PiLinkedinLogoBold />
            </a>
            <a href="https://github.com/SwarajPhalke" className="text-4xl">
              <RiGithubLine />
            </a>
          </div>
          <div className="w-full">

          <p className="mt-6">
          <a href="/resume/Swaraj_Phalke_Resume.pdf" target="_blank" className="bg-slate-800 text-white text-[16px] py-2 px-24 rounded-md">
          Download Resume</a>
          </p>
          </div>

          <div className="flex justify-center gap-8 mt-12">
            <img src="/images/icons.svg" alt="" />
            <img src="/images/icons-2.svg" alt="" />
            <img src="/images/icons-3.svg" alt="" />
          </div>
          <div className="flex justify-center gap-8 mt-8">
            <img src="/images/icons-4.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
