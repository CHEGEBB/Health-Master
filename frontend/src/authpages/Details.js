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
                <button onClick={handleUpdatePassword}>Update Password</button>
                <button onClick={handleDeleteAccount}>Delete Account</button>
            </div>
            </div>
     );
}
 
export default UserDetails;