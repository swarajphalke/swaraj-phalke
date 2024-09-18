import React from 'react'

export default function Navbar() {
  return (
    <div>
      <header>
        <nav className='flex items-center justify-between px-16 py-6 shadow-md'>
            <div>
                <p className='text-purple-600 text-3xl font-bold cursor-pointer'>Swaraj.dev</p>
            </div>
            <div>
                <ul className='flex font-semibold text-xl gap-6'>
                    <li className='hover:text-purple-600'>Home</li>
                    <li className='hover:text-purple-600'>Projects</li>
                    <li className='hover:text-purple-600'>Contact</li>
                    <li className='hover:text-purple-600'>Blog</li>
                </ul>
            </div>
        </nav>
      </header>
    </div>
  )
}
