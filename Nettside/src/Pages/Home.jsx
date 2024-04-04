import React from 'react';
import { Link } from 'react-router-dom';
import UserStories from '../Components/UserStories';

function Home() {
  return (
    <>
      {/* Hoved seksjonen av hjemme siden */}
      <div className='w-full py-[2rem] px-4 md:py-[8rem]'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white whitespace-nowrap'>
            <h2 className='text-2xl font-bold text-center pt-8'>Medlemskap</h2>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-2 mt-8'>Dags Pass: 699 NOK</p>
              <p className='py-2 border-b mx-2'>Måneds Pass: 6,000 NOK</p>
              <p className='py-2 border-b mx-2'>Student Pass: 9,000 NOK</p>
            </div>

            <Link
              className='bg-red-600 text-white text-center w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'
              to='/Membership'
            >
              <button>Les mer</button>
            </Link>
          </div>

          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
            <h2 className='text-2xl font-bold text-center pt-8'>Vi Tilbyr</h2>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-2 mt-8'>Åpen Arbeidsplass</p>
              <p className='py-2 border-b mx-2'>Privat Kontor</p>
              <p className='py-2 border-b mx-2'>Spillrom</p>
            </div>
            <Link
              className='bg-red-600 text-white text-center w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'
              to='/WeOffer'
            >
              <button>Les mer</button>
            </Link>
          </div>

          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
            <h2 className='text-2xl font-bold text-center pt-8'>Booking</h2>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-2 mt-8'>Booking av pult</p>
              <p className='py-2 border-b mx-2'>Informasjon</p>
              <p className='py-2 border-b mx-2'>Medlemskap</p>
            </div>
            <Link
              className='bg-red-600 text-white text-center w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'
              to='/Booking'
            >
              <button>Les mer</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Seksjon nr 2 av hjemmesiden */}
      <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 pb-[10rem]'>
          <div className='lg:col-span-2'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
              Tips til å forbedre arbeidsprosessen din
            </h1>
            <p>Registrer deg her for å holde deg oppdatert</p>
          </div>
          <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
              <input
                className='p-3 flex w-full rounded-md  text-black'
                type='email'
                placeholder='Skriv inn e-post'
              />
              <button className='bg-red-600 text-white rounded-md font-medium w-[250px] md:w-[300px] ml-4 my-6 px-6 py-3'>
                Oppdater Meg
              </button>
            </div>
            <p>
              Vi bryr oss om beskyttelsen av dine data. Les vår
              <span className='text-red-500'> Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
      <div className='bg-white py-[8rem] text-center rounded-lg shadow-md'>
        <UserStories />
      </div>
    </>
  );
}

export default Home;
