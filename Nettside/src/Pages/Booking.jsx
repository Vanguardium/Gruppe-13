import React, { useState } from 'react';
import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineClose,
  AiOutlineMenu,
} from 'react-icons/ai';
import { MdAddBox } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();

  return `${month}.${date}.${year}`;
}

function Booking() {
  const [currentDate, setCurrentDate] = useState(getDate());

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div>
        <div className='p-5 py-6 pt-8 flex items-center justify-between md:max-w-[1240px] mx-auto'>
          <div className='font-bold text-[25px] text-white'>
            <Link to='/'>
              <h1>Booking</h1>
            </Link>
          </div>
          <div className='flex gap-2'>
            <button className='text-white font-semibold hover:cursor-pointer uppercase text-[15px] bg-red-600 hover:bg-red-500 py-2 px-3 rounded'>
              Logg Inn
            </button>
            {/* Burger menu */}
            <div
              onClick={handleNav}
              className='block  hover:cursor-pointer my-auto text-white'
            >
              {nav ? (
                <AiOutlineClose size={25} className='hover:text-red-500' />
              ) : (
                <AiOutlineMenu size={25} className='hover:text-red-500' />
              )}
            </div>
            <div
              className={
                nav
                  ? 'fixed left-0 top-0 w-[300px] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50'
                  : 'fixed left-[-100%]'
              }
            >
              <div className='text-white'>
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
            {/* ------ */}
          </div>
        </div>
      </div>
      {/* Viser datoen i dag */}
      <div className='text-white font-bold flex pt-5 text-[25px] items-center justify-center mx-auto'>
        <h1>I dag - {currentDate}</h1>
        <p className='ml-2 hover:cursor-pointer'>
          <AiOutlineArrowRight size={20} />
        </p>
      </div>
      {/* Grid, klokkeslettene man kan booke pulter */}
      <div className='mt-10'>
        <div className='grid grid-flow-col grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12'>
          <dvi className='bg-white py-3 font-semibold border-r'></dvi>
          <dvi className='bg-white py-4 border-r font-semibold text-[15px]'>
            <p className='text-center'>10:00 - 11:00</p>
          </dvi>
          <dvi className='bg-white py-4 border-r font-semibold text-[15px]'>
            <p className='text-center'>11:00 - 12:00</p>
          </dvi>
          <dvi className='bg-white py-4 border-r font-semibold text-[15px]'>
            <p className='text-center'>12:00 - 13:00</p>
          </dvi>
          <dvi className='bg-white py-4 border-r sm:block hidden font-semibold text-[15px]'>
            <p className='text-center'>13:00 - 14:00</p>
          </dvi>
          <dvi className='bg-white py-4 border-r sm:block hidden font-semibold text-[15px]'>
            <p className='text-center'>14:00 - 15:00</p>
          </dvi>
          <dvi className='bg-white py-4 border-r md:block hidden font-semibold text-[15px]'>
            <p className='text-center'>15:00 - 16:00</p>
          </dvi>
          <dvi className='bg-white py-4 border-r md:block hidden font-semibold text-[15px]'>
            <p className='text-center'>16:00 - 17:00</p>
          </dvi>
          <dvi className='bg-white py-4 border-r lg:block hidden font-semibold text-[15px]'>
            <p className='text-center'>17:00 - 18:00</p>
          </dvi>
          <dvi className='bg-white py-4 border-r lg:block hidden font-semibold text-[15px]'>
            <p className='text-center'>18:00 - 19:00</p>
          </dvi>
          <dvi className='bg-white py-4 border-r xl:block hidden font-semibold text-[15px]'>
            <p className='text-center'>19:00 - 20:00</p>
          </dvi>
          <dvi className='bg-white py-4 border-r xl:block hidden font-semibold text-[15px]'>
            <p className='text-center'>20:00 - 21:00</p>
          </dvi>
        </div>
        <div className='grid grid-flow-col grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 border border-gray-200'>
          <dvi className='bg-gray-100 py-3 font-semibold border-r'>Pult 1</dvi>
          <dvi className='bg-gray-100 py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 sm:border-r sm:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 sm:border-r sm:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 md:border-r md:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 md:border-r md:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 lg:border-r lg:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 lg:border-r lg:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 xl:border-r xl:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 xl:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
        </div>

        {/* Row 2 */}
        <div className='grid grid-flow-col grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 border-b border-gray-200'>
          <dvi className='bg-white py-3 font-semibold border-r'>Pult 2</dvi>
          <dvi className='bg-white py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 sm:border-r sm:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 sm:border-r sm:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 md:border-r md:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 md:border-r md:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 lg:border-r lg:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 lg:border-r lg:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 xl:border-r xl:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 xl:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
        </div>
        {/* Row 3 */}
        <div className='grid grid-flow-col grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 border-b border-gray-200'>
          <dvi className='bg-gray-100 py-3 font-semibold border-r'>Pult 3</dvi>
          <dvi className='bg-gray-100 py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 sm:border-r sm:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 sm:border-r sm:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 md:border-r md:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 md:border-r md:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 lg:border-r lg:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 lg:border-r lg:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 xl:border-r xl:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 xl:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
        </div>
        {/* Row 4 */}
        <div className='grid grid-flow-col grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 border-b border-gray-200'>
          <dvi className='bg-white py-3 font-semibold border-r'>Pult 4</dvi>
          <dvi className='bg-white py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 sm:border-r sm:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 sm:border-r sm:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 md:border-r md:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 md:border-r md:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 lg:border-r lg:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 lg:border-r lg:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 xl:border-r xl:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 xl:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
        </div>
        {/* Row 5 */}
        <div className='grid grid-flow-col grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 border-b border-gray-200'>
          <dvi className='bg-gray-100 py-3 font-semibold border-r'>Pult 5</dvi>
          <dvi className='bg-gray-100 py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 sm:border-r sm:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 sm:border-r sm:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 md:border-r md:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 md:border-r md:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 lg:border-r lg:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 lg:border-r lg:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 xl:border-r xl:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 xl:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
        </div>
        {/* Row 6 */}
        <div className='grid grid-flow-col grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 border-b border-gray-200'>
          <dvi className='bg-white py-3 font-semibold border-r'>Pult 6</dvi>
          <dvi className='bg-white py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 sm:border-r sm:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 sm:border-r sm:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 md:border-r md:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 md:border-r md:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 lg:border-r lg:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 lg:border-r lg:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 xl:border-r xl:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 xl:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
        </div>
        {/* Row 7 */}
        <div className='grid grid-flow-col grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 border-b border-gray-200'>
          <dvi className='bg-gray-100 py-3 font-semibold border-r'>Pult 7</dvi>
          <dvi className='bg-gray-100 py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 sm:border-r sm:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 sm:border-r sm:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 md:border-r md:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 md:border-r md:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 lg:border-r lg:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 lg:border-r lg:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 xl:border-r xl:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 xl:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
        </div>
        {/* Row 8 */}
        <div className='grid grid-flow-col grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 border-b border-gray-200'>
          <dvi className='bg-white py-3 font-semibold border-r'>Pult 8</dvi>
          <dvi className='bg-white py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 sm:border-r sm:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 sm:border-r sm:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 md:border-r md:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 md:border-r md:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 lg:border-r lg:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 lg:border-r lg:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 xl:border-r xl:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 xl:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
        </div>
        {/* Row 9 */}
        <div className='grid grid-flow-col grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 border-b border-gray-200'>
          <dvi className='bg-gray-100 py-3 font-semibold border-r'>Pult 9</dvi>
          <dvi className='bg-gray-100 py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 sm:border-r sm:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 sm:border-r sm:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 md:border-r md:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 md:border-r md:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 lg:border-r lg:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 lg:border-r lg:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 xl:border-r xl:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 xl:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
        </div>
        {/* Row 10 */}
        <div className='grid grid-flow-col grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 border-b border-gray-200'>
          <dvi className='bg-white py-3 font-semibold border-r'>Pult 10</dvi>
          <dvi className='bg-white py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 sm:border-r sm:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 sm:border-r sm:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 md:border-r md:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 md:border-r md:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 lg:border-r lg:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 lg:border-r lg:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 xl:border-r xl:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-white py-3 text-red-700 xl:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
        </div>
        {/* Row 11 */}
        <div className='grid grid-flow-col grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 border-b border-gray-200'>
          <dvi className='bg-gray-100 py-3 font-semibold border-r'>Pult 11</dvi>
          <dvi className='bg-gray-100 py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 border-r text-red-700'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 sm:border-r sm:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 sm:border-r sm:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 md:border-r md:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 md:border-r md:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 lg:border-r lg:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 lg:border-r lg:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 xl:border-r xl:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
          <dvi className='bg-gray-100 py-3 text-red-700 xl:block hidden'>
            <MdAddBox
              size={30}
              className='mx-auto hover:cursor-pointer hover:text-red-600'
            />
          </dvi>
        </div>
      </div>
      <div className='pt-[5rem]'>
        <Footer />
      </div>
    </>
  );
}

export default Booking;
