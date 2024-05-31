import React from 'react';
import './Landingpage.scss';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (  
        <div className='landing-page'>
            <nav className="navbar">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>
                </ul>
            </nav>
            <div className='content'>
                <h1>Welcome to our Landing Page</h1>
            </div>
        </div>
    );
}
 
export default LandingPage;
