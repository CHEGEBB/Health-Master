import React, { useState } from 'react';
import './Signup.scss';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import GoogleIcon from '../images/flat-color-icons--google.svg';

const Signup = () => {
    const [passwordStrength, setPasswordStrength] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true); 

    const checkPasswordStrength = (password) => {
        if (password.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/.test(password) ) {
            setPasswordStrength('The Password is strong');
        } else if (password.length >= 6 && /[a-zA-Z]/.test(password)){
            setPasswordStrength('The Password is moderate');
        } else {
            setPasswordStrength('The Password is weak');
        }
    };

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        checkPasswordStrength(password);
    };

    const handleConfirmPasswordChange = (e) => {
        const confirmPassword = e.target.value;
        const password = e.target.form.password.value;
        setPasswordMatch(password === confirmPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        try {
            if (password !== confirmPassword) {
                throw new Error("Passwords do not match");
            }
            if (passwordStrength !== 'strong' && passwordStrength !== 'moderate') {
                throw new Error("Password must be moderately or strongly secure");
            }
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            await updateProfile(userCredential.user, {
                displayName: name
            });

            console.log("User signed up successfully:", userCredential.user);
        } catch (error) {
            console.error("Error signing up:", error.message);
        }
    };

    const googleSignIn = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            console.log("Google sign-in successful:", result.user);
        } catch (error) {
            console.error("Error signing in with Google:", error.message);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2>Sign Up</h2>
                <div className="google-signup">
                <div className="sign">
                    <h2>Sign Up with Google</h2>
                </div>
                <div className="googlecon">
                <img src={GoogleIcon} alt="Google Icon" onClick={googleSignIn} />
                </div>
               
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required onChange={handlePasswordChange} />
                        {passwordStrength && <p className={`password-strength ${passwordStrength}`}>{passwordStrength} password</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" required onChange={handleConfirmPasswordChange} />
                        {!passwordMatch && <p className="password-match">Passwords do not match</p>}
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <p>Already have an account? <a href="/login">Log in</a></p>
            </div>
        </div>
    );
};

export default Signup;
