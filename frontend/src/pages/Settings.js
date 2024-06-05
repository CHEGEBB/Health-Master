import React, { useState, useEffect } from 'react';
import { auth } from '../firebase'; 
import { updateEmail, updatePassword, deleteUser } from 'firebase/auth'; 
import './Settings.scss';

const Settings = () => {
    const [user, setUser] = useState(null); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe(); 
    }, []);

    const handleUpdateEmail = async () => {
        try {
            await updateEmail(user, email);
            console.log('Email updated successfully');
        } catch (error) {
            console.error('Error updating email:', error.message);
        }
    };

    const handleUpdatePassword = async () => {
        try {
            await updatePassword(user, password);
            console.log('Password updated successfully');
        } catch (error) {
            console.error('Error updating password:', error.message);
        }
    };

    const handleDeleteAccount = async () => {
        try {
            await deleteUser(user);
            console.log('Account deleted successfully');
        } catch (error) {
            console.error('Error deleting account:', error.message);
        }
    };

    return (
        <div className='settings-container'>
            <h1>Settings</h1>
            <div className='section'>
                <h2>Security Settings</h2>
                <div className='field'>
                    <label>Username:</label>
                    <input type="text" value={user && user.displayName} disabled />
                </div>
                <div className='field'>
                    <label>Current Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='field'>
                    <label>New Password:</label>
                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </div>
                <button className='update-btn' onClick={handleUpdatePassword}>Update Password</button>
            </div>
            <div className='section'>
                <h2>Account Settings</h2>
                <div className='field'>
                    <label>First Name:</label>
                    <input type="text" value={user && user.firstName} disabled />
                </div>
                <div className='field'>
                    <label>Last Name:</label>
                    <input type="text" value={user && user.lastName} disabled />
                </div>
                <div className='field'>
                    <label>City:</label>
                    <input type="text" value={user && user.city} disabled />
                </div>
                <div className='field'>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button className='update-btn' onClick={handleUpdateEmail}>Update Email</button>
                <div className='field'>
                    <label>Country:</label>
                    <input type="text" value={user && user.country} disabled />
                </div>
                <div className='field'>
                    <label>Date Of Birth:</label>
                    <input type="date" value={user && user.dateOfBirth} disabled />
                </div>
                <div className='field'>
                    <label>Mobile:</label>
                    <input type="tel" value={user && user.mobile} disabled />
                </div>
                <div className='field'>
                    <label>Blood Group:</label>
                    <input type="text" value={user && user.bloodGroup} disabled />
                </div>
                <div className='field'>
                    <label>Address:</label>
                    <input type="text" value={user && user.address} disabled />
                </div>
                <button className='delete-btn' onClick={handleDeleteAccount}>Delete Account</button>
            </div>
        </div>
    );
};

export default Settings;
