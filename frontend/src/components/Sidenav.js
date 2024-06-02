import React, { useState } from 'react';
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
    const [activeItem, setActiveItem] = useState('');

    const navStyles = {
        backgroundColor: isDarkMode ? '#162447' : '#3A7BD5',
        color: isDarkMode ? '#ffffff' : '#000000'
    };

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    const isActive = (itemName) => {
        return activeItem === itemName ? 'active' : '';
    };

    const verticalActiveBar = (itemName) => {
        return activeItem === itemName ? 'active-bar' : '';
        
    };
    const verticalBarStyles ={
        marginLeft: '-10px',
        marginTop: '-10px',
        width: '2px',
        height: '100%',
        backgroundColor: isDarkMode? '#ffffff' : '#000000'
    }

    return (
        <nav className={`side-nav ${isDarkMode ? 'dark-mode' : ''}`} style={navStyles}>
            <ul>
                <li className={`special ${isActive('Dashboard')}`}>
                    <div className={`nav-item ${isActive('Dashboard')}`}>
                        <div className="nav-icon">
                            <img src={Dashcon} alt="Dashboard" />
                        </div>
                        <div className="navtem">
                            <Link to='/home' onClick={() => handleItemClick('Dashboard')}>Dashboard</Link>
                        </div>
                        <div className={`vertical-bar ${verticalActiveBar('Dashboard')}`} style={verticalBarStyles}></div>
                    </div>
                </li>
                <li className={`${isActive('Profile')}`}>
                    <div className={`nav-item ${isActive('Profile')}`}>
                        <div className="nav-icon">
                            <img src={Profilecon} alt="Profile" />
                        </div>
                        <div className="navtem">
                            <Link to='/profile' onClick={() => handleItemClick('Profile')}>Profile</Link>
                        </div>
                        <div className={`vertical-bar ${verticalActiveBar('Profile')}`}></div>
                    </div>
                </li>
                <li className={`${isActive('Health Goals')}`}>
                    <div className={`nav-item ${isActive('Health Goals')}`}>
                        <div className="nav-icon">
                            <img src={HealthGoalcon} alt="Health Goals" />
                        </div>
                        <div className="navtem">
                            <Link to='/healthgoals' onClick={() => handleItemClick('Health Goals')}>Health Goals</Link>
                        </div>
                        <div className={`vertical-bar ${verticalActiveBar('Health Goals')}`}></div>
                    </div>
                </li>
                <li className={`${isActive('Symptoms')}`}>
                    <div className={`nav-item ${isActive('Symptoms')}`}>
                        <div className="nav-icon">
                            <img src={Symptomcon} alt="Symptoms" />
                        </div>
                        <div className="navtem">
                            <Link to='/symptoms' onClick={() => handleItemClick('Symptoms')}>Symptoms Checker</Link>
                        </div>
                        <div className={`vertical-bar ${verticalActiveBar('Symptoms')}`}></div>
                    </div>
                </li>
                <li className={`${isActive('Medication')}`}>
                    <div className={`nav-item ${isActive('Medication')}`}>
                        <div className="nav-icon">
                            <img src={Medicationcon} alt="Medication" />
                        </div>
                        <div className="navtem">
                            <Link to='/medication' onClick={() => handleItemClick('Medication')}>Medication Management</Link>
                        </div>
                        <div className={`vertical-bar ${verticalActiveBar('Medication')}`}></div>
                    </div>
                </li>
                <li className={`${isActive('Appointments')}`}>
                    <div className={`nav-item ${isActive('Appointments')}`}>
                        <div className="nav-icon">
                            <img src={Appointmentcon} alt="Appointments" />
                        </div>
                        <div className="navtem">
                            <Link to='/appointments' onClick={() => handleItemClick('Appointments')}>Appointments</Link>
                        </div>
                        <div className={`vertical-bar ${verticalActiveBar('Appointments')}`}></div>
                    </div>
                </li>
                <li className={`${isActive('Health')}`}>
                    <div className={`nav-item ${isActive('Health')}`}>
                        <div className="nav-icon">
                            <img src={Healthcon} alt="Health" />
                        </div>
                        <div className="navtem">
                            <Link to='/health' onClick={() => handleItemClick('Health')}>Health & Wellness</Link>
                        </div>
                        <div className={`vertical-bar ${verticalActiveBar('Health')}`}></div>
                    </div>
                </li>
                <li className={`${isActive('Settings')}`}>
                    <div className={`nav-item ${isActive('Settings')}`}>
                        <div className="nav-icon">
                            <img src={Settings} alt="Settings" />
                        </div>
                        <div className="navtem">
                            <Link to='/settings' onClick={() => handleItemClick('Settings')}>Settings</Link>
                        </div>
                        <div className={`vertical-bar ${verticalActiveBar('Settings')}`}></div>
                    </div>
                </li>
            </ul>
            <div className="dark-mode-toggle" onClick={toggleDarkMode}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </div>
        </nav>
    );
}

export default Sidenav;
