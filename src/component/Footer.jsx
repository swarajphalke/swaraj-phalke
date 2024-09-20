import React from 'react'
import { PiLinkedinLogoBold } from "react-icons/pi";
import { RiGithubLine } from "react-icons/ri";
export default function Footer() {
  return (
    <div id='Footer' className='py-[3%] bg-gray-800 text-white'>
      <div className="custom-container flex flex-col md:flex-row gap-4 items-center justify-between ">
        <div className="text-lg font-bold">Copyright © 2024. All rights are reserved</div>
        <div className='flex gap-4 items-center'>
            <a href="https://www.linkedin.com/in/swaraj-phalke-b5539b220">              <PiLinkedinLogoBold className='text-[33px]' />
            </a>
            <a href="https://github.com/SwarajPhalke">              <RiGithubLine className='text-[37px]'/>
            </a>
        </div>
      </div>
    </div>
  )
}
