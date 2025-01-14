import Link from "next/link";
import React from "react";

const PhoneMenu: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-4 left-[16px] w-[calc(100vw-32px)] rounded-full h-12 flex items-center justify-center bg-gray-500/30 backdrop-blur">
      <ul className="items-center gap-8 flex">
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
      </ul>
    </div>
  );
};

export default PhoneMenu;
