import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function About() {
  return (
    <>
      <Navbar />
      <div className='p-4'>
        <div className='max-w-[1240px] mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md flex flex-col md:flex-col mt-[2rem]'>
          <h4 className='border-b border-gray-600 font-bold text-[25px]'>
            Om Oss
          </h4>
          <p className='pt-2 pb-10'>
            The aim is to cultivate a hub for student entrepreneurs and
            professionals, including those from significant local enterprises,
            who are keen on working within a communal and dynamic setting as
            opposed to isolated home offices. As of today, the tenants are
            Revisorteam, YourCompanion, GreenEnergy and VismaAI who seat in
            private offices. We want to attract students who want to work and
            become entrepreurs. We want to also attract individuals who work in
            groups - larger companies centrally in our cities, who live in the
            region and/or want to move to the region, and in that way take their
            work home and then be able to sit in a co-working building, where
            they meet other like-minded people and not alone in a home office.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default About;
