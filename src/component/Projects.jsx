import React from "react";
import { RiLinkM } from "react-icons/ri";
import { TbBrandGithub } from "react-icons/tb";

export default function Projects() {
  return (
    <div id="Projects" className="bg-gray-100  shadow-md">
      <div className="flex flex-col gap-12 md:gap-24 pt-12 pb-12 md:pb-20 md:pt-[100px] px-5">
        <div className="md:flex px-3 md:gap-12 w-full shadow-md bg-white overflow-hidden rounded-xl">
          <div className="project-image-container project-0   my-3 w-full md:w-2/5 h-[220px] md:h-[325px] rounded-xl border border-gray-200 overflow-hidden"></div>
          <div className="px-2 pb-4 md:pt-9 md:pb-7">
            <h1 className="text-xl font-bold uppercase text-purple-600">
              Gym Website
            </h1>
            <h2 className="font-bold text-3xl mt-1 md:mt-4 text-gray-800">
              Fithub Management
            </h2>
            <p className="text-gray-600 text-[15px] md:text-sm mt-2 md:mt-4">
              <b>Tech Stack:</b>
              <span className="text-red-700">HTML, </span>
              <span className="text-blue-500">CSS, </span>
              <span className="text-purple-700">Bootstrap, </span>
              <span className="text-yellow-700">Javascript, </span>
              <span className="text-yellow-500">Firebase, </span>
              {/* <span className="text-green-700">MongoDB, </span>
              <span className="text-blue-700">Strapi, </span>
              <span className="text-red-700">Sanity,</span> */}
            </p>
            <p className="text-[17px] md:text-md text-gray-600 mt-2 md:mt-4">
              Created fully functional webapp where I post content related to
              Tech.
            </p>
            <p className="text-[17px] md:text-md text-gray-600 mt-2 md:mt-4">
              Integrated Strapi and Sanity which made managing blogs easy. Also
              implimented same logic with Node App
            </p>
            <div className="flex gap-4 mt-6">
              <a target="_blank" href="https://fit-hub-mu.vercel.app/">
                <button className="bg-purple-600 text-white px-4 py-2 rounded flex items-center gap-1">
                  <RiLinkM className="text-2xl " />
                  Check Live
                </button>
              </a>
              <a target="_blank" href="https://github.com/swarajphalke/FitHub-">
                <button className="bg-gray-800 text-white px-4 py-2 rounded flex items-center gap-1">
                  <TbBrandGithub className="text-2xl" />
                  View Code
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="md:flex px-3 md:gap-12 w-full shadow-md bg-white rounded-xl">
          <div
            className="project-image-container project-1 my-3 w-full md:w-2/5 h-[220px] md:h-[325px] rounded-xl border border-gray-200 overflow-hidden 
          "
          ></div>
          <div className="px-2 pb-4 md:pt-9 md:pb-7">
            <h1 className="text-xl font-bold uppercase text-purple-600">
              Clone
            </h1>
            <h2 className="font-bold text-3xl mt-1 md:mt-4 text-gray-800">
              Gemini - Frontend
            </h2>
            <p className="text-gray-600 text-[15px] md:text-sm mt-2 md:mt-4">
              <b>Tech Stack:</b>
              <span className="text-blue-700">ReactJS, </span>
              <span className="text-gray-700">Tailwind Css, </span>
              {/* <span className="text-purple-700">Shadcn-ui, </span>
              <span className="text-red-700">NodeJs, </span>
              <span className="text-green-700">ExpressJs, </span>
              <span className="text-green-700">MongoDB, </span>
              <span className="text-blue-700">Strapi, </span>
              <span className="text-red-700">Sanity,</span> */}
            </p>
            <p className="text-[17px] md:text-md text-gray-600 mt-2 md:mt-4">
              Created fully functional webapp where I post content related to
              Tech.
            </p>
            <p className="text-[17px] md:text-md text-gray-600 mt-2 md:mt-4">
              Integrated Strapi and Sanity which made managing blogs easy. Also
              implimented same logic with Node App
            </p>
            <div className="flex gap-4 mt-6">
              <a target="_blank" href="https://gemini-clone-xi-one.vercel.app/">
                <button className="bg-purple-600 text-white px-4 py-2 rounded flex items-center gap-1">
                  <RiLinkM className="text-2xl " />
                  Check Live
                </button>
              </a>
              <a
                target="_blank"
                href="https://github.com/swarajphalke/gemini-clone"
              >
                <button className="bg-gray-800 text-white px-4 py-2 rounded flex items-center gap-1">
                  <TbBrandGithub className="text-2xl" />
                  View Code
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="md:flex px-3 md:gap-12 w-full shadow-md bg-white rounded-xl">
          <div
            className="project-image-container project-0 my-3 w-full md:w-2/5 h-[220px] md:h-[325px] rounded-xl border border-gray-200 overflow-hidden 
          "
          ></div>
          <div className="px-2 pb-4 md:pt-9 md:pb-7">
            <h1 className="text-xl font-bold uppercase text-purple-600">
              Self Learning
            </h1>
            <h2 className="font-bold text-3xl mt-1 md:mt-4 text-gray-800">
              Weather Forecasting App
            </h2>
            <p className="text-gray-600 text-[15px] md:text-sm mt-2 md:mt-4">
              <b>Tech Stack:</b>
              <span className="text-blue-700">ReactJS, </span>
              <span className="text-gray-700">Tailwind Css, </span>
              <span className="text-red-700">Material UI, </span>
              {/* <span className="text-red-700">NodeJs, </span>
              <span className="text-green-700">ExpressJs, </span>
              <span className="text-green-700">MongoDB, </span>
              <span className="text-blue-700">Strapi, </span>
              <span className="text-red-700">Sanity,</span> */}
            </p>
            <p className="text-[17px] md:text-md text-gray-600 mt-2 md:mt-4">
              Created fully functional webapp where I post content related to
              Tech.
            </p>
            <p className="text-[17px] md:text-md text-gray-600 mt-2 md:mt-4">
              Integrated Strapi and Sanity which made managing blogs easy. Also
              implimented same logic with Node App
            </p>
            <div className="flex gap-4 mt-6">
              <a
                target="_blank"
                href="https://weather-app-brown-psi.vercel.app/"
              >
                <button className="bg-purple-600 text-white px-4 py-2 rounded flex items-center gap-1">
                  <RiLinkM className="text-2xl " />
                  Check Live
                </button>
              </a>
              <a
                target="_blank"
                href="https://github.com/swarajphalke/Weather-App"
              >
                <button className="bg-gray-800 text-white px-4 py-2 rounded flex items-center gap-1">
                  <TbBrandGithub className="text-2xl" />
                  View Code
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="md:flex px-3 md:gap-12 w-full shadow-md bg-white rounded-xl">
          <div
            className="project-image-container project-0 my-3 w-full md:w-2/5 h-[220px] md:h-[325px] rounded-xl border border-gray-200 overflow-hidden 
          "
          ></div>
          <div className="px-2 pb-4 md:pt-9 md:pb-7">
            <h1 className="text-xl font-bold uppercase text-purple-600">
              Self Learning
            </h1>
            <h2 className="font-bold text-3xl mt-1 md:mt-4 text-gray-800">
              Todo-List
            </h2>
            <p className="text-gray-600 text-[15px] md:text-sm mt-2 md:mt-4">
              <b>Tech Stack:</b>
              <span className="text-blue-700">ReactJS, </span>
              <span className="text-gray-700">Tailwind Css, </span>
              {/* <span className="text-purple-700">Shadcn-ui, </span>
              <span className="text-red-700">NodeJs, </span>
              <span className="text-green-700">ExpressJs, </span>
              <span className="text-green-700">MongoDB, </span>
              <span className="text-blue-700">Strapi, </span>
              <span className="text-red-700">Sanity,</span> */}
            </p>
            <p className="text-[17px] md:text-md text-gray-600 mt-2 md:mt-4">
              Created fully functional webapp where I post content related to
              Tech.
            </p>
            <p className="text-[17px] md:text-md text-gray-600 mt-2 md:mt-4">
              Integrated Strapi and Sanity which made managing blogs easy. Also
              implimented same logic with Node App
            </p>
            <div className="flex gap-4 mt-6">
              <a target="_blank" href="https://tudo-list.vercel.app/">
                <button className="bg-purple-600 text-white px-4 py-2 rounded flex items-center gap-1">
                  <RiLinkM className="text-2xl " />
                  Check Live
                </button>
              </a>
              <a
                target="_blank"
                href="https://github.com/swarajphalke/TudoList"
              >
                <button className="bg-gray-800 text-white px-4 py-2 rounded flex items-center gap-1">
                  <TbBrandGithub className="text-2xl" />
                  View Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
