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



const Sidenav = () => {


    return (  
        <nav className='side-nav'>
        <h1>Health Master</h1>
        <ul>
        {/* <li>
                <Link to='/'>Signup</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
        </li> */}

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
                        <Link to='/symptoms'>Symptoms</Link>
                    </div>
                </div>
            </li>
            <li>
                <div className="nav-item">
                    <div className="nav-icon">
                        <img src={Medicationcon} alt="Medication" />
                    </div>
                    <div className="navtem">
                        <Link to='/medication'>Medication</Link>
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
                        <Link to='/health'>Health</Link>
                    </div>
                </div>
            </li>
            <li>
                <div className="nav-item">
                    <div className="nav-icon">
                        <img src={Settings}
                        alt="Settings" />
                        </div>
                        <div className="navtem">

                            <Link to='/settings'>Settings</Link>
                        </div>
                    </div>
                        </li>
        </ul>
        </nav>
    );
}
 
export default Sidenav;