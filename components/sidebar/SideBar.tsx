import React from "react";
import ProfileCard from "./ProfileCard";
import Skills from "./Skills";
import Socials from "./Socials";

const SideBar: React.FC = () => {
  return (
    <div className="hidden md:block w-1/4 primary-text bg-gray-500/10 my-4 ml-4 p-4 rounded-md overflow-auto">
      <ProfileCard />
      {/* <Skills /> */}
      <Socials />
    </div>
  );
};

export default SideBar;
