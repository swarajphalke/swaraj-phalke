import React from "react";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLeetcode,
} from "@tabler/icons-react";

const Socials: React.FC = () => {
  const socials = [
    {
      href: "https://www.linkedin.com/in/swaraj-phalke-b5539b220/",
      icon: <IconBrandLinkedin size={32} />,
      name: "LinkedIn",
    },
    {
      href: "https://github.com/swarajphalke",
      icon: <IconBrandGithub size={32} />,
      name: "GitHub",
    },
    {
      href: "https://leetcode.com/u/QVd038CQHF/",
      icon: <IconBrandLeetcode size={32} />,
      name: "LeetCode",
    },
    {
      href: "https://instagram.com/swarajphalke_",
      icon: <IconBrandInstagram size={32} />,
      name: "Instagram",
    },
  ];

  return (
    <div className="flex space-x-4 justify-center items-center p-4 bg-gray-500/10 mt-8 rounded-lg">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors duration-300"
          title={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
