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
    const storageRef = auth.currentUser.uid + '/profilePicture.jpg';
    const uploadTask = storageRef.put(file);
    uploadTask.on('state_changed', 
      (snapshot) => {},
      (error) => {
        console.error('Error uploading profile picture:', error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          setUserData({ ...userData, profilePicture: downloadURL });
          updateProfile(auth.currentUser, {
            photoURL: downloadURL
          });
        });
      }
    );
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
      <div className="profile-section">
        <h3>Basic Information</h3>
        <input type="text" name="name" value={userData.name} onChange={handleChange} placeholder="Name" />
        <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email" disabled />
        <input type="text" name="age" value={userData.age} onChange={handleChange} placeholder="Age" />
        <input type="text" name="sex" value={userData.sex} onChange={handleChange} placeholder="Sex" />
        <input type="text" name="weight" value={userData.weight} onChange={handleChange} placeholder="Weight" />
        <input type="text" name="height" value={userData.height} onChange={handleChange} placeholder="Height" />
        <input type="text" name="bloodGroup" value={userData.bloodGroup} onChange={handleChange} placeholder="Blood Group" />
      </div>
      <div className="profile-section">
        <h3>Medical Information</h3>
        <textarea name="diseases" value={userData.diseases} onChange={handleChange} placeholder="Known Diseases"></textarea>
        <textarea name="illnesses" value={userData.illnesses} onChange={handleChange} placeholder="Previous Illnesses"></textarea>
        <textarea name="allergies" value={userData.allergies} onChange={handleChange} placeholder="Allergies"></textarea>
      </div>
      <div className="profile-section">
        <h3>Profile Picture</h3>
        <input type="file" accept="image/*" onChange={handleProfilePictureUpload} />
        {userData.profilePicture && <img src={userData.profilePicture} alt="Profile" />}
      </div>
      <button onClick={saveProfile}>Save Profile</button>
    </div>
  );
};

export default Profile;
