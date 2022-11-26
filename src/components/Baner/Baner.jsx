import React from 'react';
import {FaUserCircle} from "react-icons/fa";
import {FaCalendarAlt} from "react-icons/fa";
import {MdLocationOn} from "react-icons/md";
import {MdAccessTimeFilled} from "react-icons/md";
import  "./Baner.css";
const Baner = () => {
  return (
    <div className='app__baner'>
      <div className="app__baner-info">
        <div className="app__baner-info_header">
          <h1>Let’s Begin Here: Approaching Craft in Fiction Through Character</h1>
          <div className="app__baner-info_header-btn">

          <button className='app__baner-info_header-btn1'>
              <FaUserCircle style={{color:"#00ACB4",fontSize:"20px"}}/>
            <span>

          David William Hill
          </span>
          </button>
          <button className='app__baner-info_header-btn2'> <span>
             Fiction
            </span>
             </button>
          <button className='app__baner-info_header-btn3'>
             <span>
              
            Advanced
              </span> 
            </button>
          </div>
        </div>
        <div className="app__baner-info_membership">
          <div className="app__baner-info_membership-signup">
            <div className="app__baner-info_membership-signup_money">
              <div className="app__baner-info_membership-signup_money-info">
                <p>$200</p>
                <span>Member</span>
              </div>
              <div className='app__baner-info_membership-signup_money-bar'/>
              <div className="app__baner-info_membership-signup_money-info">
                <p>$259</p>
                <span>Non-Member</span>
              </div>
            </div>
            <div className="app__baner-info_membership-signup-button">

              <h3>Sign Up</h3>
            </div>
          </div>
          <div className="app__baner-info_membership-rate">
            <p>Apply for Reduced-Rate Spot</p>
          </div>

        </div>
      </div>
      <div className="app__baner-address">
        <div className="app__baner-address-date">
          <div className="app__baner-address-date-full">
            <FaCalendarAlt className='pp__baner-address-date-icons'/>
            <span style={{fontWeight:"700"}}>
              Jan 05 - Feb 15 
            </span>
              <span style={{color:"#DC3636"}}> (5 Wednesdays) </span>
          </div>
          <div className="app__baner-address-date-time">
            <span>
            10:00am - 4:00pm (PST)
            </span>
          </div>
        </div>
        <div className="app__baner-address-info">
          <div className="bar"/>
          <MdLocationOn className='pp__baner-address-date-icons'/>
          <span>
          2042 Balboa St., <br/>
          San Francisco, CA 94121
          </span>
        </div>
      <div className="app__baner-address-deadline">
          <div className="bar"/>
                  <MdAccessTimeFilled className='pp__baner-address-date-icons'/>
          <div className='app__baner-address-deadline-info'>  
                  <span>Registration deadline:</span>
            <p>May 07 at 10:30am (PST)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Baner
