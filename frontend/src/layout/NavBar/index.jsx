import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavItem from './Sections/NavItem';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  }

  return (
    <nav className='relative z-30 text-white bg-gray-900'>
      <div className='w-full'>
        <div className='flex items-center justify-between mx-5 sm:mx-10 lg:mx-20'>
          {/* 로고 */}
          <div className='flex items-center text-2xl h-14'>
            <Link to="/" >YourPlan?</Link>
          </div>

          {/* nav-items */}
          <div>
            <NavItem />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar