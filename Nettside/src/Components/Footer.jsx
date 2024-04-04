import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaSnapchatSquare,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='max-w-[1500px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300'>
      <div className='lg:col-span-2 flex flex-col justify-between mt-4 md:flex-row'>
        <div>
          <h6 className='font-medium text-gray-400 pb-3 '>Kontakt Oss</h6>
          <ul>
            <li className='py-1 text-sm'>Telefon: xxx xx xxx</li>
            <li className='py-1 text-sm'>
              Besøkende adresse: xxx (
              <span className='text-red-500 underline hover:cursor-pointer py-1'>
                Kart
              </span>
              )
            </li>
            <li className='py-1 text-sm'>
              E-post: <span> </span>
              <span className='text-red-500 underline hover:cursor-pointer'>
                USNCoworkingSpace@example.com
              </span>
            </li>
          </ul>
          <div className='flex justify-between float-start gap-5 md:w-[100%] my-5 hover:cursor-pointer'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaSnapchatSquare size={30} />
          </div>
        </div>
        <div className='md:w-[50%]'>
          <h6 className='font-medium text-gray-400 mt-[5rem] pb-3 md:mt-0'>
            Åpningstider
          </h6>
          <ul>
            <li className='py-2 text-sm border-b border-gray-600'>
              Mandag <div className='float-end w-[50%]'> 05:00 - 24:00</div>
            </li>
            <li className='py-2 text-sm border-b border-gray-600'>
              Tirsdag <div className='float-end w-[50%]'> 05:00 - 24:00</div>
            </li>
            <li className='py-2 text-sm border-b border-gray-600'>
              Onsdag <div className='float-end w-[50%]'> 05:00 - 24:00</div>
            </li>
            <li className='py-2 text-sm border-b border-gray-600'>
              Torsdag <div className='float-end w-[50%]'> 05:00 - 24:00</div>
            </li>
            <li className='py-2 text-sm border-b border-gray-600'>
              Fredag <div className='float-end w-[50%]'> 05:00 - 24:00</div>
            </li>
            <li className='py-2 text-sm border-b border-gray-600'>
              Lørdag <div className='float-end w-[50%]'> 05:00 - 24:00</div>
            </li>
            <li className='py-2 text-sm border-b border-gray-600'>
              Søndag <div className='float-end w-[50%]'> 05:00 - 24:00</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
