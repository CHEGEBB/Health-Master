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
          <h1>Brian</h1>
        </div>
        <div className="user-email">
          {/* user email implementation */}
        </div>

      </div>
      </div>
    </div>   
  );
  
    
};

export default Profile;
