import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1500px] mx-auto p-4'>
      <h1 className='w-100 text-2xl font-bold text-white hover:cursor-pointer'>
        <Link to='/'>USNStart</Link>
      </h1>
      <ul className='hidden md:flex'>
        <Link to='/' className='p-4 hover:text-red-500'>
          Hjem
        </Link>
        <Link to='/Membership' className='p-4 hover:text-red-500'>
          Medlemskap
        </Link>
        <Link to='/Booking' className='p-4 hover:text-red-500'>
          Booking
        </Link>
        <Link to='/WeOffer' className='p-4 hover:text-red-500'>
          Vi Tilbyr
        </Link>
        <Link to='/About' className='p-4 hover:text-red-500'>
          Om Oss
        </Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden hover:cursor-pointer'>
        {nav ? (
          <AiOutlineClose size={25} className='hover:text-red-500' />
        ) : (
          <AiOutlineMenu size={25} className='hover:text-red-500' />
        )}
      </div>
      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[63%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden z-50'
            : 'fixed left-[-100%]'
        }
      >
        <h1 className='w-full text-2xl font-bold text-white m-4 mt-8'>
          <Link onClick={handleNav}>USNStart</Link>
        </h1>

        <ul className='uppercase flex flex-col p-4 text-[15px]'>
          <Link
            onClick={handleNav}
            to='/'
            className='p-4 border-b border-gray-600 hover:text-red-500'
          >
            Hjem
          </Link>
          <Link
            onClick={handleNav}
            to='/Membership'
            className='p-4 border-b border-gray-600 hover:text-red-500'
          >
            Medlemskap
          </Link>
          <Link
            onClick={handleNav}
            to='/Booking'
            className='p-4 border-b border-gray-600 hover:text-red-500'
          >
            Booking
          </Link>
          <Link
            onClick={handleNav}
            to='/WeOffer'
            className='p-4 border-b border-gray-600 hover:text-red-500'
          >
            Vi tilbyr
          </Link>
          <Link
            onClick={handleNav}
            to='/About'
            className='p-4 border-b border-gray-600 hover:text-red-500'
          >
            Om oss
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
