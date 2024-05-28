import React from 'react';
import './Sidenav.scss';
import { Link } from 'react-router-dom';


const Sidenav = () => {


    return (  
        <nav className='side-nav'>
        <ul>
        <li>
                <Link to='/'>Signup</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
        </li>

            <li>
                <Link to='/home'>Home</Link>
            </li>  
        </ul>
        </nav>
    );
}
 
export default Sidenav;