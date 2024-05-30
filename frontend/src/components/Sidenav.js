import React from 'react';
import './Sidenav.scss';
import { Link } from 'react-router-dom';
import Dashcon from '../images/icons/ic--sharp-dashboard.svg';
import Profilecon from '../images/icons/iconamoon--profile-circle-fill.svg';
import HealthGoalcon from '../images/icons/mage--goals-fill.svg';
import Symptomcon from '../images/icons/icon-park-solid--check-one.svg';
import Medicationcon from '../images/icons/ic--outline-medication-liquid.svg';
import Appointmentcon from '../images/icons/streamline--waiting-appointments-calendar-solid.svg';
import Healthcon from '../images/icons/healthicons--blood-pressure-2-negative.svg';
import Settings from '../images/icons/mdi--settings.svg';
import { useDarkMode } from '../context/DarkModeContext';

const Sidenav = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode(); 

    const navStyles={
        backgroundColor: isDarkMode ? '#483d8b' : '#f0f8ff',
        color: isDarkMode ? '#ffffff' : '#000000'
    }

    return (  
        <nav className={`side-nav ${isDarkMode ? 'dark-mode' : ''}`} style={navStyles}> 
            <ul>
                <li className='special'>
                    <div className="nav-item">
                        <div className="nav-icon">
                            <img src={Dashcon} alt="Dashboard" />
                        </div>
                        <div className="navtem">
                            <Link to='/home'>Dashboard</Link>
                        </div>
                    </div>
                </li>  
                <li>
                    <div className="nav-item">
                        <div className="nav-icon">
                            <img src={Profilecon} alt="Profile" />
                        </div>
                        <div className="navtem">
                            <Link to='/profile'>Profile</Link>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="nav-item">
                        <div className="nav-icon">
                            <img src={HealthGoalcon} alt="Health Goals" />
                        </div>
                        <div className="navtem">
                            <Link to='/healthgoals'>Health Goals</Link>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="nav-item">
                        <div className="nav-icon">
                            <img src={Symptomcon} alt="Symptoms" />
                        </div>
                        <div className="navtem">
                            <Link to='/symptoms'>Symptoms Checker</Link>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="nav-item">
                        <div className="nav-icon">
                            <img src={Medicationcon} alt="Medication" />
                        </div>
                        <div className="navtem">
                            <Link to='/medication'>Medication Management</Link>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="nav-item">
                        <div className="nav-icon">
                            <img src={Appointmentcon} alt="Appointments" />
                        </div>
                        <div className="navtem">
                            <Link to='/appointments'>Appointments</Link>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="nav-item">
                        <div className="nav-icon">
                            <img src={Healthcon} alt="Health" />
                        </div>
                        <div className="navtem">
                            <Link to='/health'>Health & Wellness</Link>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="nav-item">
                        <div className="nav-icon">
                            <img src={Settings} alt="Settings" />
                        </div>
                        <div className="navtem">
                            <Link to='/settings'>Settings</Link>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="dark-mode-toggle" onClick={toggleDarkMode}>
                {/* Display dark mode toggle button */}
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </div>
        </nav>
    );
}
 
export default Sidenav;
