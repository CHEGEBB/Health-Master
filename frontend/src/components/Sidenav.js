import React from 'react';
import './Sidenav.scss';
import { Link } from 'react-router-dom';


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
                <Link to='/home'>Dashboard</Link>
            </li>  
            <li>
                <Link to='/profile'>Profile</Link>
            </li>
            <li>
                <Link to='/healthgoals'>Health Goals</Link>
            </li>
            <li>
                <Link to='/symptomchecker'>Symptom Checker</Link>
            </li>
            <li>
                <Link to='/medication'>Medication</Link>
            </li>
            <li>
                <Link to='/appointments'>Appointments</Link>
            </li>
            <li>
                <Link to='/health'>Health</Link>
            </li>
            <li>
                <Link to='/settings'>Settings</Link>
            </li>
        </ul>
        </nav>
    );
}
 
export default Sidenav;