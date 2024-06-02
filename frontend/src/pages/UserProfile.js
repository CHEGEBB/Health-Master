import React from 'react';
import './UserProfile.scss';


const Profile = () => {

  return (
    <div className="profile-container">
      <div className="personal-details">
        <div className="person">
          <div className="bg"></div>
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
            <p>john.doe@example.com</p>
          </div>
          <div className="edit">
            <button>Edit Profile</button>
          </div>
        </div>
        <div className="private-details">
          <div className="details">
            <div className="row1">
              <div className="detail">
                <h3>Sex</h3>
                <p>Male</p>
              </div>
              <div className="detail">
                <h3>Age</h3>
                <p>24</p>
              </div>
              <div className="detail">
                <h3>Blood Group</h3>
                <p>AB+</p>
              </div>
              <div className="detail">
                <h3>Marital Status</h3>
                <p>Single</p>
              </div>
            </div>
            <div className="row2">
              <div className="detail">
                <h3>Status</h3>
                <p>Active</p>
              </div>
              <div className="detail">
                <h3>Date of Birth</h3>
                <p>01/01/2000</p>
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
      <div className="other-details">
  <div className="patient-details">
    <div className="detail">
      <div className="detail-content">
      <div className="det1">
      <h3>Blood Type</h3>
      </div>
        
        <p>AB+</p>
      </div>
    </div>
    <div className="detail">
      <div className="detail-content">
        <h3>Allergies</h3>
        <p>Penicillin, peanuts</p>
      </div>
    </div>
    <div className="detail">
      <div className="detail-content">
        <h3>Diseases</h3>
        <p>Diabetes</p>
      </div>
    </div>
    <div className="detail">
      <div className="detail-content">
        <h3>Pressure</h3>
        <p>130/80 mmHG</p>
      </div>
    </div>
    <div className="detail">
      <div className="detail-content">
        <h3>Temperature</h3>
        <p>36.8 Degree</p>
      </div>
    </div>
  </div>
  <div className="check-ups">
    <div className="check-up">
      <p>Dr Anthony Wager, Dermatologist</p>
      <button className="delete-button">Delete</button>
    </div>
    <div className="check-up">
      <p>Dr Smith Wright, Clinical Doctor</p>
      <button className="delete-button">Delete</button>
    </div>
    <div className="check-up">
      <p>Dr Tom Humpton, Dentist</p>
      <button className="delete-button">Delete</button>
    </div>
    <div className="check-up">
      <p>Dr Riphat Jion, Surgeon</p>
      <button className="delete-button">Delete</button>
    </div>
  </div>
</div>

    </div>
  );
};

export default Profile;
