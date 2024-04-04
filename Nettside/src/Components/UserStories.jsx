import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cb from '../Images/cb.png';
import aa from '../Images/aa.png';
import jk from '../Images/jk.png';
import mm from '../Images/mm.png';

const UserStoriesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false, // Hide default navigation arrows
  };

  const userStories = [
    {
      id: 1,
      image: cb,
      name: 'John Doe',
      story:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed lorem metus.',
    },
    {
      id: 2,
      image: aa,
      name: 'Sam Smith',
      story:
        'Integer pulvinar tempus tortor, vitae tristique magna ultrices nec.',
    },
    {
      id: 3,
      image: jk,
      name: 'John Johnson',
      story:
        'Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
    },
    {
      id: 4,
      image: mm,
      name: 'John Smith',
      story:
        'Integer pulvinar tempus tortor, vitae tristique magna ultrices nec.',
    },
  ];

  return (
    <Slider {...settings} className='carousel-container'>
      {userStories.map((user) => (
        <div key={user.id} className='p-4'>
          <img
            src={user.image}
            alt={user.name}
            className='rounded-full w-20 h-20 mx-auto mb-4'
          />
          <h2 className='text-center text-xl font-bold'>{user.name}</h2>
          <p className='text-center'>{user.story}</p>
        </div>
      ))}
    </Slider>
  );
};

export default UserStoriesCarousel;
