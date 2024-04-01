import React from 'react';
import '../Styles/WeOffer.css';
import OpenWokSpace from '../Images/OpenWokSpace.png';
import PrivateOffices from '../Images/PrivateOffices.png';
import Lounge from '../Images/Lounge.png';
import OfficeKitchen from '../Images/OfficeKitchen.png';
import PrinterArea from '../Images/PrinterArea.png';
import GameRoom from '../Images/GameRoom.png';

function WeOffer() {
  return (
    <>
      <div className='pageContainer'>
        <div className='sectionContainer'>
          <div className='sections'>
            <div className='textBox'>
              <h4>Open Workspace</h4>
              <p>
                This is the heart of a coworking space, featuring flexible
                seating arrangements with communal desks, tables, and chairs.
                It's suitable for individual work, informal meetings, and
                collaborative projects. There are space for 60 individual
                working here.
              </p>
            </div>
            <img src={OpenWokSpace} alt='' />
          </div>
          <div className='sections flip'>
            <div className='textBox'>
              <h4>Private offices</h4>
              <p>
                Small, fully-furnished offices that can accommodate individuals
                or small teams, offering more privacy and a dedicated workspace.
                The total capacities are 6 private offices. Meeting rooms:
                Various-sized meeting rooms equipped with projectors and
                whiteboards for presentations, client meetings, or team
                discussions. There are 5 meeting rooms in total
              </p>
            </div>
            <img src={PrivateOffices} alt='' />
          </div>
          <div className='sections'>
            <div className='textBox'>
              <h4>Lounge Area</h4>
              <p>
                Comfortable seating areas, often with sofas and coffee tables,
                providing a relaxed atmosphere for informal meetings or
                relaxation.v
              </p>
            </div>
            <img src={Lounge} alt='' />
          </div>
          <div className='sections flip'>
            <div className='textBox'>
              <h4>Kitchen and Dining Area</h4>
              <p>
                A well-equipped kitchen or kitchenette with facilities for
                preparing meals and dining. It also offer complimentary coffee,
                tea, and snacks.
              </p>
            </div>
            <img src={OfficeKitchen} alt='' />
          </div>
          <div className='sections'>
            <div className='textBox'>
              <h4>Printing and Scanning area</h4>
              <p>
                Equipment for printing, scanning, and photocopying documents.
              </p>
            </div>
            <img src={PrinterArea} alt='' />
          </div>
          <div className='sections flip'>
            <div className='textBox'>
              <h4>Game room</h4>
              <p>
                A recreational space with games like billiard, ping-pong, or
                video games, encouraging breaks and social interaction.
              </p>
            </div>
            <img src={GameRoom} alt='' />
          </div>
        </div>
      </div>
    </>
  );
}
export default WeOffer;
