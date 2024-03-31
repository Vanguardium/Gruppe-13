import React from 'react';
import { Link } from 'react-router-dom';
import SchoolFrontPage from '../Images/SchoolFrontPage.png';
import Floorplan from '../Images/Floorplan.png';
import '../Styles/HomePage.css';

function Home() {
  return (
    <>
      <div className='MainSection'>
        <img
          className='FrontPageImage'
          src={SchoolFrontPage}
          alt='Bilde av en skole'
        />
      </div>
      <div className='Wrapper'>
        <ul>
          <li>
            <Link to='/membership' className='titleOnBox'>
              <div>
                <h4>Medlemskap</h4>
                <p>Her finner du våre Medlemsskap</p>
              </div>
            </Link>
            <Link to='/weoffer' className='titleOnBox'>
              <div>
                <h4>Vi Tilbyr</h4>
                <p>Dette tilbyr vi</p>
              </div>
            </Link>
            <Link to='/about' className='titleOnBox'>
              <div>
                <h4>Om oss</h4>
                <p>Litt om oss</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      {/* Snarvei under bilde til medlemskap */}
      <div className='snarvei'>
        <h2>Snarvei;</h2>
        <Link to='/membership' className='snarveiButton'>
          Medlemskap
        </Link>
      </div>
      {/* Coworking Space inromasjon & bilde */}
      <div className='informationBoxes'>
        <div className='box'>
          <div className='infoText'>
            <h2>Coworkig Space</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              voluptatem, ipsa tempora expedita aspernatur explicabo rem
              corrupti similique illum in dicta vero laboriosam, ducimus,
              perferendis tempore nam mollitia repellendus. Dolores quis esse
              neque quisquam voluptates repudiandae, aperiam mollitia
              repellendus non dicta fugit et iste voluptatibus distinctio
              perspiciatis veritatis commodi corrupti?
            </p>
          </div>
        </div>
        <div className='infoImage'>
          <img src={Floorplan} alt='Your Image' />
        </div>
      </div>
    </>
  );
}

export default Home;
