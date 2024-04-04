import React from 'react';
import { useState } from 'react';

function Membership() {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <>
      <div className='w-full py-[2rem] px-4 md:py-[8rem]'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 bg-white'>
            <h2 className='text-[30px] font-semibold pt-5 mx-2'>Dagspass</h2>
            <div className='font-medium'>
              <p className='py-2 mx-2 mt-2 text-[17px] font-semibold'>
                Pris: 699 NOK
              </p>
              <div className='py-2 px-2'>
                <li>
                  For en daglig avgift på 699 NOK kan medlemmer nyte en dags
                  tilgang til plassen
                </li>
              </div>
            </div>
            <button
              onClick={handleFlip}
              className='bg-red-600 text-white w-[200px] rounded-md font-medium my-6 px-6 py-3'
            >
              Kjøp
            </button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 bg-white'>
            <h2 className='text-[30px] font-semibold pt-5 mx-2'>Månedskort</h2>
            <div className='font-medium'>
              <p className='py-2 mx-2 mt-2 text-[17px] font-semibold'>
                Pris: 6,000 NOK
              </p>
              <div className='py-2 px-2'>
                <li>Ubegrenset tilgang</li>
              </div>
            </div>
            <button
              onClick={handleFlip}
              className='bg-red-600 text-white w-[200px] rounded-md font-medium my-6 px-6 py-3'
            >
              Kjøp
            </button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 bg-white'>
            <h2 className='text-[30px] font-semibold pt-5 mx-2'>Studentpass</h2>
            <div className='font-medium'>
              <p className='py-2 mx-2 mt-2 text-[17px] font-semibold'>
                Pris: 9,000 NOK
              </p>
              <div className='py-2 px-2'>
                <li>Studenter kan benytte seg av et semesterlangt</li>
              </div>
            </div>
            <button
              onClick={handleFlip}
              className='bg-red-600 text-white w-[200px] rounded-md font-medium my-6 px-6 py-3'
            >
              Kjøp
            </button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 bg-white'>
            <h2 className='text-[30px] font-semibold pt-5 mx-2'>
              Årlig Reservert Pult
            </h2>
            <div className='font-medium'>
              <p className='py-2 mx-2 mt-2 text-[17px] font-semibold'>
                Pris: 50,000 NOK
              </p>
              <div className='py-2 px-2'>
                <li>
                  Medlemmer sikre seg en personlig pult i et felles kontorområde
                </li>
              </div>
            </div>
            <button
              onClick={handleFlip}
              className='bg-red-600 text-white w-[200px] rounded-md font-medium my-6 px-6 py-3'
            >
              Kjøp
            </button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 bg-white'>
            <h2 className='text-[30px] font-semibold pt-5 mx-2'>
              Privat Kontor
            </h2>
            <div className='font-medium'>
              <p className='py-2 mx-2 mt-2 text-[17px] font-semibold'>
                Pris: 20,000 NOK
              </p>
              <div className='py-2 px-2'>
                <li>
                  For de som ønsker et personlig skrivebord på et privat kontor
                </li>
              </div>
            </div>
            <button
              onClick={handleFlip}
              className='bg-red-600 text-white w-[200px] rounded-md font-medium my-6 px-6 py-3'
            >
              Kjøp
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Membership;
