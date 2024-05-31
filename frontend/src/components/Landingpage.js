import React from 'react';
import { Link } from 'react-router-dom';
import './Landingpage.scss';

const LandingPage = () => {
    return (  
        <div className='landing-page'>
            <nav className="navbar">
                <ul>
                    <li><a href='#intro-section'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#featured'>Featured</a></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>
                </ul>
            </nav>
            <section className='intro-section' id='intro-section'>
                <div className='cover-image'>
                    <img src='path_to_your_image.jpg' alt='Health Master Cover' />
                </div>
                <div className='content'>
                    <h1>Health Master</h1>
                    <p>Your personal health management companion</p>
                    <button onClick={() => window.location.href = 'https://your-deployed-app-url.com'}>Go to Application</button>
                </div>
            </section>
            <section className='feature-section' id='featured'>
                <div className='content'>
                    <h1>Features</h1>
                    <p>Explore the key features of Health Master:</p>
                    <ul>
                        <li>Intelligent Symptom Checker</li>
                        <li>Medication Management System</li>
                        <li>Health and Wellness Gamification App</li>
                        <li>Health Goals and Progress Tracking</li>
                    </ul>
                </div>
            </section>
            <section className='about-section' id='about'>
                <div className='content'>
                    <h1>About</h1>
                    <p>Health Master is designed to tackle the challenge of managing health and wellness efficiently. In today's fast-paced world, individuals often struggle to keep track of their symptoms, medications, health goals, and overall wellness. Health Master aims to bridge this gap by providing a platform that offers an Intelligent Symptom Checker, Medication Management System, Health and Wellness Gamification App, and Health Goals and Progress Tracking.</p>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
