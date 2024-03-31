import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import BurgerMenu from '../Images/BurgerMenu.svg';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className={click ? 'navbar active' : 'navbar'}>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          USNStart Coworking Space
        </Link>
        <div
          className={click ? 'menu-icon active' : 'menu-icon'}
          onClick={handleClick}
        >
          <div className='menu-bar'>
            <img src={BurgerMenu} alt='Burger Meny' />
          </div>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={handleClick}>
              Hjem
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Membership' className='nav-links' onClick={handleClick}>
              Medlemskap
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/WeOffer' className='nav-links' onClick={handleClick}>
              Vi Tilbyr
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/About' className='nav-links' onClick={handleClick}>
              Om Oss
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
