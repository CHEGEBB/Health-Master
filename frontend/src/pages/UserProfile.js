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
    profilePicture: currentUser.photoURL || 'https://via.placeholder.com/150', // Default placeholder image
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserData({ ...userData, profilePicture: reader.result });
      updateProfile(auth.currentUser, {
        photoURL: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  const saveProfile = () => {
    updateProfile(auth.currentUser, {
      displayName: userData.name,
      photoURL: userData.profilePicture,
    })
      .then(() => {
        console.log('Profile updated successfully');
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
      });
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-picture">
          <img src={userData.profilePicture} alt="Profile" />
          <input type="file" accept="image/*" onChange={handleProfilePictureUpload} />
        </div>
        <h2>{userData.name}</h2>
        <p>{userData.email}</p>
      </div>
      <div className="profile-details">
        <h3>Basic Information</h3>
        <div className="field">
          <label>Name:</label>
          <span>{userData.name}</span>
        </div>
        <div className="field">
          <label>Email:</label>
          <span>{userData.email}</span>
        </div>
        <div className="field">
          <label>Age:</label>
          <input type="text" name="age" value={userData.age} onChange={handleChange} />
        </div>
        <div className="field">
          <label>Sex:</label>
          <input type="text" name="sex" value={userData.sex} onChange={handleChange} />
        </div>
        <div className="field">
          <label>Weight:</label>
          <input type="text" name="weight" value={userData.weight} onChange={handleChange} />
        </div>
        <div className="field">
          <label>Height:</label>
          <input type="text" name="height" value={userData.height} onChange={handleChange} />
        </div>
        <div className="field">
          <label>Blood Group:</label>
          <input type="text" name="bloodGroup" value={userData.bloodGroup} onChange={handleChange} />
        </div>
      </div>
      <div className="profile-details">
        <h3>Medical Information</h3>
        <textarea name="diseases" value={userData.diseases} onChange={handleChange} placeholder="Known Diseases"></textarea>
        <textarea name="illnesses" value={userData.illnesses} onChange={handleChange} placeholder="Previous Illnesses"></textarea>
        <textarea name="allergies" value={userData.allergies} onChange={handleChange} placeholder="Allergies"></textarea>
      </div>
      <button onClick={saveProfile}>Save Profile</button>
    </div>
  );
};

export default Profile;
