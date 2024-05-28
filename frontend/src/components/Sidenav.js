import React from 'react';
import './Sidenav.scss';
import {Link,useNavigate } from 'react-router-dom';


const Sidenav = () => {
    const navigate = useNavigate();
    const {pathname} = useNavigate();
    const hideSidebar = pathname === '/login' || pathname === '/signup';
    if (hideSidebar) return null;






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