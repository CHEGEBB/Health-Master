import React from 'react';
import './Signup.scss';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Signup = () => {

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
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            await userCredential.user.updateProfile({
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
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" required />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <button onClick={googleSignIn}>Sign Up with Google</button>
                <p>Already have an account? <a href="/login">Log in</a></p>
                <p>Or <a href="/">Go Back</a></p>
            </div>
        </div>
    );
};

export default Signup;
