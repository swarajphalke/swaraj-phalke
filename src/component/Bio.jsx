import React from 'react'
import { PiLinkedinLogoBold } from "react-icons/pi";
import { RiGithubLine } from "react-icons/ri";

export default function Bio() {
  return (
    <div className=' bg-pink-50 shadow-md px-40 pt-28 pb-28'>
      <div className='flex  justify-between ' >
        <div >
          <p className='text-gray-800 text-6xl font-bold mt-3'>Front-End React <br /> Developer</p>
            <p className='text-gray-600 mt-6   text-xl tracking-wide'>Hi, I'm Swaraj Phalke. A passionate Front-end React Developer based in Pune, India. 📍</p>
            <div className="flex gap-4 mt-5 ">
            <a href="https://www.linkedin.com/in/swaraj-phalke-b5539b220" className='text-4xl'><PiLinkedinLogoBold /></a>
            <a href="https://github.com/SwarajPhalke" className='text-4xl'>< RiGithubLine /></a>
            </div>
            <p className='mt-4'>
              <a href="">Download Resume</a>
            </p>
        </div>
        <div  >
          <img className=' w-[420px] rounded-xl'  src='../src/assets/profile.jpg'/>
        </div>
      </div>
      <div className='flex items-center mt-28'>
        <p className='font-semibold text-xl'>Tech Stack &nbsp; &nbsp; &nbsp;|&nbsp; &nbsp; HTML CSS   JS TS   React Node   Tail BS </p> 
          
      </div>
    </div>
  )
}
