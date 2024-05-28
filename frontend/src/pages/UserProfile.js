import React, { useState } from 'react';
import { auth } from '../firebase';
import { updateProfile } from 'firebase/auth';
import './UserProfile.scss';

const Profile = () => {
  const currentUser = auth.currentUser;
  const [userData, setUserData] = useState({
    name: currentUser.displayName || '',
    email: currentUser.email || '',
    age: '',
    sex: '',
    weight: '',
    height: '',
    bloodGroup: '',
    diseases: '',
    illnesses: '',
    allergies: '',
    profilePicture: currentUser.photoURL || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setUserData({ ...userData, profilePicture: reader.result });
      updateProfile(auth.currentUser, {
        photoURL: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  const saveProfile = () => {
    updateProfile(auth.currentUser, {
      displayName: userData.name,
      photoURL: userData.profilePicture
    }).then(() => {
      console.log('Profile updated successfully');
    }).catch((error) => {
      console.error('Error updating profile:', error);
    });
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-picture">
        <img src={userData.profilePicture} alt="Profile" />
        <input type="file" accept="image/*" onChange={handleProfilePictureUpload} />
      </div>
      <div className="profile-details">
        <div className="profile-info">
          <label>Name:</label>
          <input type="text" name="name" value={userData.name} onChange={handleChange} />
        </div>
        <div className="profile-info">
          <label>Email:</label>
          <span>{userData.email}</span>
        </div>
        <div className="profile-info">
          <label>Age:</label>
          <input type="text" name="age" value={userData.age} onChange={handleChange} />
        </div>
        <div className="profile-info">
          <label>Sex:</label>
          <input type="text" name="sex" value={userData.sex} onChange={handleChange} />
        </div>
        <div className="profile-info">
          <label>Weight:</label>
          <input type="text" name="weight" value={userData.weight} onChange={handleChange} />
        </div>
        <div className="profile-info">
          <label>Height:</label>
          <input type="text" name="height" value={userData.height} onChange={handleChange} />
        </div>
        <div className="profile-info">
          <label>Blood Group:</label>
          <input type="text" name="bloodGroup" value={userData.bloodGroup} onChange={handleChange} />
        </div>
        <div className="profile-info">
          <label>Known Diseases/Conditions:</label>
          <textarea name="diseases" value={userData.diseases} onChange={handleChange}></textarea>
        </div>
        <div className="profile-info">
          <label>Previous Illnesses:</label>
          <textarea name="illnesses" value={userData.illnesses} onChange={handleChange}></textarea>
        </div>
        <div className="profile-info">
          <label>Allergies:</label>
          <textarea name="allergies" value={userData.allergies} onChange={handleChange}></textarea>
        </div>
        <button onClick={saveProfile}>Save Profile</button>
      </div>
    </div>
  );
};

export default Profile;
