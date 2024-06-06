import { useState } from 'react';
import { auth } from '../firebase';


const UserDetails = () => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const user = auth.currentUser;

const handleUpdatePassword = async () => {
}

const handleDeleteAccount = async () => {
}

    return ( 
        <div className="details">
            <h1>User Details</h1>
            <div className="section">
                <h2>Security Settings</h2>
                <div className="field">
                    <label>Username:</label>
                    <input type="text" value={user && user.displayName} />
                </div>
                <div className="field">
                    <label>Email:</label>
                    <input type="text" value={user && user.email} />
                </div>
                <div className="sex">
                    <label>Sex:</label>
                    <input type="text" value={user && user.sex} />
                </div>
                <div className="age">
                    <label>Age:</label>
                    <input type="text" value={user && user.age} />
                </div>
                <div className="bloodgroup">
                    <label>Blood Group:</label>
                    <input type="text" value={user && user.bloodgroup}/>
                </div>
                <div className="marital-status">
                    <label>Marital Status:</label>
                    <input type="text" value={user && user.maritalstatus} />
                </div>
                <div className="status">
                    <select>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <div className="dob">
                    <label>Date of Birth:</label>
                    <input type="text" value={user && user.dob}  />
                </div>
                <div className="height">
                    <label>Height:</label>
                    <input type="text" value={user && user.height}  />
                </div>
                <div className="weight">
                    <label>Weight:</label>
                    <input type="text" value={user && user.weight}  />
                </div>
                <div className="allergies">
                    <label>Allergies:</label>
                    <input type="text" value={user && user.allergies}  />
                </div>
                <div className="diseases">
                    <label>Diseases:</label>
                    <input type="text" value={user && user.diseases} />
                </div>
                <button onClick={handleUpdatePassword}>Update Password</button>
                <button onClick={handleDeleteAccount}>Delete Account</button>
            </div>
            </div>
     );
}
 
export default UserDetails;