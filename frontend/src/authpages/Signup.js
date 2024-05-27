import React from 'react';
import './Signup.scss';
import {auth} from '../firebase';

const Signup = () => {
    const handle
    return ( 

        <div className="signup-container">
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form>
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
          <p>Already have an account? <a href="/login">Log in</a></p>
          <p>Or <a href="/">Go Back</a></p>
          </div>
        </div>
     );
}
 
export default Signup;