"use client";
import React from "react";
import Link from "next/link";
import { IconMenu, IconSun, IconSunFilled } from "@tabler/icons-react";
import SideBarPhone from "./sidebar/SideBarPhone";

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <div className="bg-gray-500/30 md:bg-gray-500/10 backdrop-blur px-4 py-3 rounded-md items-center justify-between sticky top-4 md:top-0 z-50 flex">
      <ul className="items-center gap-8 hidden md:flex">
        <Link className="hover:text-white/50" href="/">
          Overview
        </Link>
        <Link className="hover:text-white/50" href="/projects">
          Projects
        </Link>
        <Link className="hover:text-white/50" href="/blog">
          Blog
        </Link>
        <Link className="hover:text-white/50" href="/contact">
          Contact
        </Link>
        {/* <Link className="hover:text-white/50" href="/">
          Certifications
        </Link> */}
      </ul>

      <div className="flex items-center font-bold md:hidden text-xl space-x-3">
        <span onClick={() => setIsSidebarOpen(true)}>
          <IconMenu />
        </span>
        <span>Swaraj Phalke</span>
      </div>

      <div>
        {isDarkMode ? (
          <IconSun
            className="cursor-pointer"
            onClick={() => setIsDarkMode(false)}
          />
        ) : (
          <IconSunFilled
            className="cursor-pointer"
            onClick={() => setIsDarkMode(true)}
          />
        )}
      </div>
      <div
        className={`fixed z-50 bg-gray-900 transition-all duration-300 ease-in-out top-0 w-full rounded-lg  ${
          isSidebarOpen ? "left-0" : "left-[calc(-100%-16px)]"
        } `}
      >
        <SideBarPhone onCloseSidebar={closeSidebar} />
      </div>
    </div>
  );
};

export default Header;
