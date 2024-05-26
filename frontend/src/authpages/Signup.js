import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { auth, firestore } from '../firebase'; // Assuming you have a firestore instance for database operations

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [emailError, setEmailError] = useState('');

    const checkPasswordStrength = (value) => {
        // Implement your password strength checker logic here
        // For example, you can check the length, presence of special characters, etc.
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // Minimum eight characters, at least one uppercase letter, one lowercase letter, and one number
        if (regex.test(value)) {
            setPasswordStrength('strong');
        } else {
            setPasswordStrength('');
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        checkPasswordStrength(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setPasswordMatch(e.target.value === password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Check if passwords match
            if (password !== confirmPassword) {
                setPasswordMatch(false);
                return;
            }

            // Check if email is already in use
            const emailExists = await checkEmailExists(email);
            if (emailExists) {
                setEmailError('Email already in use');
                return;
            }

            // Create user
            await auth.createUserWithEmailAndPassword(email, password);
            alert('User registered successfully');
        } catch (error) {
            alert(error.message);
        }
    };

    const checkEmailExists = async (email) => {
        // Query Firestore to check if the email already exists
        const querySnapshot = await firestore.collection('users').where('email', '==', email).get();
        return !querySnapshot.empty;
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                {emailError && <p>{emailError}</p>}
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                />
                <p>Password strength: {passwordStrength}</p>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    placeholder="Confirm Password"
                />
                {!passwordMatch && <p>Passwords do not match</p>}
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
    );
};

export default SignUp;
