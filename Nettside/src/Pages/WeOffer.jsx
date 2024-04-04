import React from 'react';

function WeOffer() {
  return (
    <div className='max-w-[1240px] mx-auto px-4'>
      <div className='grid gap-10'>
        <div className='bg-white p-6 md:p-8 rounded-lg shadow-md flex flex-col items-center md:flex-row mt-[5rem]'>
          <div>
            <h4 className='text-xl font-semibold mb-2 mt'>Open Workspace</h4>
            <p className='text-gray-600'>
              This is the heart of a coworking space, featuring flexible seating
              arrangements with communal desks, tables, and chairs. It's
              suitable for individual work, informal meetings, and collaborative
              projects. There are spaces for 60 individuals working here.
            </p>
          </div>
        </div>

        <div className='bg-white p-6 md:p-8 rounded-lg shadow-md flex flex-col items-center md:flex-row'>
          <div>
            <h4 className='text-xl font-semibold mb-2'>Privat Kontor</h4>
            <p className='text-gray-600'>
              Small, fully-furnished offices that can accommodate individuals or
              small teams, offering more privacy and a dedicated workspace. The
              total capacity is 6 private offices. Additionally, there are
              various-sized meeting rooms equipped with projectors and
              whiteboards for presentations, client meetings, or team
              discussions. There are 5 meeting rooms in total.
            </p>
          </div>
        </div>

        <div className='bg-white p-6 md:p-8 rounded-lg shadow-md flex flex-col items-center md:flex-row'>
          <div>
            <h4 className='text-xl font-semibold mb-2'>Lounge Area</h4>
            <p className='text-gray-600'>
              Comfortable seating areas, often with sofas and coffee tables,
              providing a relaxed atmosphere for informal meetings or
              relaxation.
            </p>
          </div>
        </div>

        <div className='bg-white p-6 md:p-8 rounded-lg shadow-md flex flex-col items-center md:flex-row'>
          <div>
            <h4 className='text-xl font-semibold mb-2'>
              Kitchen and Dining Area
            </h4>
            <p className='text-gray-600'>
              A well-equipped kitchen or kitchenette with facilities for
              preparing meals and dining. It also offer complimentary coffee,
              tea, and snacks.
            </p>
          </div>
        </div>

        <div className='bg-white p-6 md:p-8 rounded-lg shadow-md flex flex-col items-center md:flex-row'>
          <div>
            <h4 className='text-xl font-semibold mb-2'>
              Printing and Scanning area
            </h4>
            <p className='text-gray-600'>
              Equipment for printing, scanning, and photocopying documents.
            </p>
          </div>
        </div>

        <div className='bg-white p-6 md:p-8 rounded-lg shadow-md flex flex-col items-center md:flex-row'>
          <div>
            <h4 className='text-xl font-semibold mb-2'>Game room</h4>
            <p className='text-gray-600'>
              A recreational space with games like billiard, ping-pong, or video
              games, encouraging breaks and social interaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeOffer;
