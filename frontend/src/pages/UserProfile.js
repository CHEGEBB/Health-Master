import React, { useState, useEffect } from 'react';
import { auth } from '../firebase'; 
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './UserProfile.scss';

const Profile = () => {
 
  return (
    <div className="profile-container">
    <div className="personal-details">
      <div className="person">
        <div className="profile-pic">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Avatar"
            className="avatar"
          />
        </div>
        <div className="person-name">
          <h1>John Doe</h1>
        </div>
        <div className="person-email">
          {/* authenticated email from firebase auth */}
          <p>john.doe@example.com</p>
        </div>
      </div>
      <div className="private-details">
        <h2>Private Details</h2>
        <div className="details">
          <div className="detail">
            <h3>Date of Birth</h3>
            <p>01/01/2000</p>
          </div>
          <div className="detail">
            <h3>Sex</h3>
            <p>Male</p>
          </div>
          <div className="detail">
            <h3>Height</h3>
            <p>170cm</p>
          </div>
          <div className="detail">
            <h3>Weight</h3>
            <p>70kg</p>
          </div>
        </div>
      </div>
      </div>
    </div>
    
    </div>
  );
};

export default Profile;
