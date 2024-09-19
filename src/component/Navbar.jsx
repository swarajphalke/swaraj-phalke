import React from 'react'

export default function Navbar() {
  return (
    <div>
      <header>
        <nav className='flex items-center px-8 justify-between md:px-16 py-6 shadow-md'>
            <div>
                <p className='text-purple-600 text-3xl font-bold cursor-pointer'>Swaraj.dev</p>
            </div>
            <div>
                <ul className='hidden md:flex font-semibold text-xl gap-6'>
                    <li className='hover:text-purple-600'>Home</li>
                    <li className='hover:text-purple-600'>Projects</li>
                    <li className='hover:text-purple-600'>Contact</li>
                    <li className='hover:text-purple-600'>Blog</li>
                </ul>

            </div>
            <div className='md:hidden cursor-pointer'></div>
        </nav>
      </header>
    </div>
  )
}
