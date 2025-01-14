import React from "react";
import ProfileCard from "./ProfileCard";
import Skills from "./Skills";
import Socials from "./Socials";
import { IconX } from "@tabler/icons-react";

interface SideBarPhoneProps {
  onCloseSidebar: () => void;
}

const SideBarPhone: React.FC<SideBarPhoneProps> = ({ onCloseSidebar }) => {
  return (
    <div className="md:hidden w-full bg-gray-500/30 primary-text rounded-md overflow-auto pb-8">
      <div className="p-4" onClick={onCloseSidebar}>
        <IconX />
      </div>
      <ProfileCard />
      {/* <Skills /> */}
      <div className="px-4">
        <Socials />
      </div>
    </div>
  );
};

export default SideBarPhone;
