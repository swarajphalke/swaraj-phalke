import React from 'react'

export default function Blog() {
  return (
    <div id='Blog' className='bg-gray-100 pt-20 pb-[66px] px-2'>
      <div className="custom-project-container">
        <h1 className="mb-8 uppercase text-purple-600 font-bold text-xl text-center">Recent Blog Posts</h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className='bg-white p-4 rounded-xl shadow-md'>
                <img src="/images/coming-soon.avif" className="rounded-xl" />
                <a href="#">
                   <h1 className='text-lg font-semibold mt-4 hover:text-purple-700 cursor-pointer'>
                   Mastering Frontend Development with HTML, CSS, and JavaScript
                    </h1> </a>
            </div>
            <div className='bg-white p-4 rounded-xl shadow-md'>
                <img src="/images/coming-soon.avif" className="rounded-xl" />
                <a href="#">                <h1 className='text-lg font-semibold mt-4 hover:text-purple-700 cursor-pointer'>Optimizing Frontend Performance: Tips and Tricks</h1>
                </a>
            </div>
            <div className='bg-white p-4 rounded-xl shadow-md'>
                <img src="/images/coming-soon.avif" className="rounded-xl" />
                <a href="#">                <h1 className='text-lg font-semibold mt-4 hover:text-purple-700 cursor-pointer'>Blog title with new image</h1>
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}
