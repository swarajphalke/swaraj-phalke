import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { TbBrandWhatsapp } from "react-icons/tb";


export default function Contact() {
  return (
    <div
      id="Contact"
      className=" pt-10 pb-9 md:pt-20 md:pb-20 px-2 relative shadow-md shadow-black/10"
    >
      <div className="custom-container">
        <h1 className="uppercase text-purple-600 font-bold text-xl mb-4">
          Contact
        </h1>
        <h2 className="font-bold text-2xl text-gray-800 ">
          Don't be shy ! Hit me up! 👇
        </h2>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
            <a href="tel:+918421646984" className="w-full md:w-1/2 border text-[17px] p-8 rounded-lg flex items-center gap-4">
            <FiPhoneCall className="text-purple-600  text-[26px]"/> <h1 className="pb-1">+91 8421646984</h1>
            </a>
            <a href="mailto:swarajphalke555@gmail.com" className="w-full md:w-1/2 border text-[17px] p-8 rounded-lg flex items-center gap-4">
            <LuMail  className="text-red-800 text-[28px]"/> <h1 className="pb-1">swarajphalke555@gmail.com</h1>
            </a>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
            <a href="https://www.linkedin.com/in/swaraj-phalke-b5539b220" className="w-full md:w-1/2 border text-[17px] p-8 rounded-lg flex items-center gap-4">
            <PiLinkedinLogoBold className="text-blue-900 text-[28px]"/> <h1>Swaraj Phalke</h1>
            </a>
            <a href="" className="w-full md:w-1/2 border text-[17px] p-8 rounded-lg flex items-center gap-4">
            <TbBrandWhatsapp className="text-green-600 text-[31px]" /> <h1 className="pb-1">+91 8421646984</h1>

            </a> 
        </div>
      </div>
       
    </div>
  );
}
