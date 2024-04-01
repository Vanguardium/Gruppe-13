import React from 'react';
import '../Styles/Membership.css';

function Membership() {
  return (
    <>
      <div className='membershipContainer'>
        <div className='membershipInfo'>
          <h1 className='membersipTitle'>Medlemskap</h1>
          <div className='membershipBoxes'>
            <div className='textBox'>
              <div className='titledText'>
                <h5>Day Pass:</h5>
              </div>
              <div className='underText'>
                <p>
                  {/* 699 NOK */}
                  For a daily fee of 699 NOK, members can enjoy one-day access
                  to the space.
                </p>
              </div>
            </div>
            <div className='textBox'>
              <div className='titledText'>
                <h5>Monthly Pass:</h5>
              </div>
              <div className='underText'>
                <p>
                  {/* 6,000 NOK */}
                  Unlimited access is available for a monthly charge of 6,000
                  NOK.
                </p>
              </div>
            </div>
            <div className='textBox'>
              <div className='titledText'>
                <h5>Student Pass:</h5>
              </div>
              <div className='underText'>
                <p>
                  {/* 9,000 NOK */}
                  Students can avail a semester-long membership for 9,000 NOK.
                </p>
              </div>
            </div>
            <div className='textBox'>
              <div className='titledText'>
                <h5>Annual Reserved Desk:</h5>
              </div>
              <div className='underText'>
                <p>
                  {/* 50,000 NOK */}
                  For an annual fee of 50,000 NOK, members can secure a personal
                  desk in a shared office area.
                </p>
              </div>
            </div>
            <div className='textBox'>
              <div className='titledText'>
                <h5>Private Office Desk:</h5>
              </div>
              <div className='underText'>
                <p>
                  {/* 20,000 NOK */}
                  For those desiring a personal desk in a private office, the
                  rate is set at 20,000 NOK per month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Membership;
