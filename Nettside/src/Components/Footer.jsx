import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-column'>
          <h3>Om oss</h3>
          <p>Informasjon om treningsstudioet.</p>
          <Link to='/about'>Les mer</Link>
        </div>
        <div className='footer-column'>
          <h3>Åpningstider</h3>
          <p>Mandag-fredag: 06:00 - 00:00</p>
          <p>Lørdag-søndag: 07:00 - 00:00</p>
        </div>
        <div className='footer-column'>
          <h3>Kontakt</h3>
          <p>Adresse: 123 Gateveien, 0123 Oslo</p>
          <p>Telefon: 12345678</p>
          <p>E-post: info@example.com</p>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2024 USNStart Coworking Space. Alle rettigheter reservert.</p>
        <div className='footer-social'>
          <a
            href='https://www.facebook.com/toppformtreningssenter'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-facebook'></i>
          </a>
          <a
            href='https://twitter.com/toppformtrening'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-twitter'></i>
          </a>
          <a
            href='https://www.instagram.com/toppformtreningssenter'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-instagram'></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
