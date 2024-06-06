import React, { useState } from 'react';
import { auth } from '../firebase';
import './Details.css';

const UserDetails = () => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const user = auth.currentUser;

    const handleUpdatePassword = async () => {
        // Handle password update logic
    }

    const handleDeleteAccount = async () => {
        // Handle account deletion logic
    }

    return ( 
        <div className="details">
            <h1>User Details</h1>
            <div className="section">
                <h2>Security Settings</h2>
                <div className="field">
                    <label>Username:</label>
                    <input type="text" value={user && user.displayName} disabled />
                </div>
                <div className="field">
                    <label>Email:</label>
                    <input type="text" value={user && user.email} disabled />
                </div>
                <div className="sex">
                    <label>Sex:</label>
                    <input type="text" value={user && user.sex} disabled />
                </div>
                <div className="age">
                    <label>Age:</label>
                    <input type="text" value={user && user.age} disabled />
                </div>
                <div className="bloodgroup">
                    <label>Blood Group:</label>
                    <input type="text" value={user && user.bloodgroup} disabled />
                </div>
                <div className="marital-status">
                    <label>Marital Status:</label>
                    <input type="text" value={user && user.maritalstatus} disabled />
                </div>
                <div className="status">
                    <select>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <div className="dob">
                    <label>Date of Birth:</label>
                    <input type="text" value={user && user.dob} disabled />
                </div>
                <div className="height">
                    <label>Height:</label>
                    <input type="text" value={user && user.height} disabled />
                </div>
                <div className="weight">
                    <label>Weight:</label>
                    <input type="text" value={user && user.weight} disabled />
                </div>
                <div className="allergies">
                    <label>Allergies:</label>
                    <input type="text" value={user && user.allergies} disabled />
                </div>
                <div className="diseases">
                    <label>Diseases:</label>
                    <input type="text" value={user && user.diseases} disabled />
                </div>
                <button onClick={handleUpdatePassword}>Update Password</button>
                <button onClick={handleDeleteAccount}>Delete Account</button>
            </div>
        </div>
     );
}
 
export default UserDetails;
