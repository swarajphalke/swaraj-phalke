import React from 'react'

export default function Projects() {
  return (
    <div className='bg-gray-100 shadow-md'>
      <div className="flex gap-8 pt-[100px] px-5">
        <div className="flex gap-12 pt-9 w-full shadow-md bg-white rounded-xl">
            <div className=''>
              <h1>Swaraj</h1>
            </div>
            <div>
              <h1 className='text-xl font-bold uppercase text-purple-600'>Blog Website</h1>
              <h2 className="font-bold text-3xl text-gray-800">
                Vikas Saini Blog
              </h2>
              <p className="text-gray-600 text-sm">
                <b>Tech Stack:</b>
                <span className='text-red-700'>NextJS, </span>
                <span className='text-gray-700'>Tailwind Css, </span>
                <span className='text-purple-700'>Shadcn-ui, </span>
                <span className='text-red-700'>NodeJs, </span>
                <span className='text-green-700'>ExpressJs, </span>
                <span className='text-green-700'>MongoDB, </span>
                <span className='text-blue-700'>Strapi, </span>
                <span className='text-red-700'>Sanity,</span>
              </p>
              <p className='text-md text-gray-600'>Created fully functional blog webapp where I post content related to Tech.</p>
              <p className="text-md text-gray-600">
              Integrated Strapi and Sanity which made managing blogs easy. Also implimented same logic with Node App
              </p>
              <div className='flex gap-4 mt-4'>
                <a target='_blank' href="">
                  <button className="bg-purple-600 text-white px-4 py-2 rounded flex items-center gap-1">Check Live</button>
                </a>
                <a target='_blank' href="">
                <button className="bg-gray-800 text-white px-4 py-2 rounded flex items-center gap-1">View Code</button>
                </a>
              </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}
