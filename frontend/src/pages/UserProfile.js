// import React, { useState } from 'react';
// import { auth } from '../firebase';
// import { updateProfile } from 'firebase/auth';
import './UserProfile.scss';

const Profile = () => {

  return (
    <div className="profile-container">
    <div className="personal-details">
      <div className="profile-pic">
      {/* profile pic implementation */}
      </div>
      <div className="user-details">
        <div className="user-name">
          {/* user name implementation */}
          <p>Brian</p>
        </div>
        <div className="user-email">
          {/* user email implementation */}
          <p>brayo@gmail.com</p>
        </div>
        <div className="user-phone">
          {/* user phone number implementation */}
          <p>0712345678</p>
        </div>

      </div>
      </div>
      <div className="health-details">
      <div className="column1">
      <div className="gender-info">
        <h2>Gender</h2>
        <p>Male</p>
      </div>
      <div className="dob-info">
        <h2>Date of Birth</h2>
        <p>01/01/2000</p>
      </div>
      <div className="blood-type-info">
        <h2>Blood Type</h2>
        <p>A+</p>
      </div>
      <div className="height-info">
        <h2>Height</h2>
        <p>170cm</p>
      </div>
      </div>
      <div className="column2">
        <div className="weight-info">
        <h2>Weight</h2>
        <p>70kg</p>
        </div>
        <div className="allergies-info">
        <h2>Allergies</h2>
        <p>None</p>
        </div>
        <div className="medications-info">
          <div className="prescribed-drugs">
            <h2>Prescribed Drugs</h2>
            <p>None</p>
          </div>
        </div>
        <div className="city-info">
          <h2>City</h2>
          <p>Nairobi</p>
        </div>
      </div>
      </div>
      <div className="health-reports">
        <h2>Health Reports:</h2>
        <div className="report">
        <div className="bp">
        <h3>Blood Pressure</h3>
        </div>
        <div className="value">
          <p>120/80</p>
        </div>
        <div className="date">
          <h3>12/06/24</h3>
        </div>
        </div>
        <div className="report">
        <div className="checkup">
          <h3>Checkup</h3>
          </div>
          <div className="value">
            <p>Normal</p>
            </div>
            <div className="date">
            <h3>12/06/24</h3>
            </div>
          </div>
          <div className="report">
            <div className="temperature">
            <h3>Temperature</h3>
            </div>
            <div className="value">
              <p>36.5</p>
            </div>
            <div className="date">
              <h3>12/06/24</h3>
            </div>
          </div>
        </div>
        
      </div>   
  );
  
    
};

export default Profile;
