import React from 'react';
import './Home.scss';
import Notificationicon from '../images/icons/ic--baseline-notifications.svg';
import  SearchIcon from '../images/icons/fluent--search-48-filled (1).svg';
import Remindericon from '../images/icons/hugeicons--apple-reminder.svg';


const Homepage = () => {
    return (  
        
        <div className='homepage'>
         <header>
            <div className="search-bar">
            <img src={SearchIcon} alt="Search" />
                <input type="text" name="search" placeholder="Search"/>
            </div>
            <div className="notifications">
            <img src={Notificationicon} alt="Notifications" />
            </div>
            <div className="reminders">
            <img src={Remindericon} alt="Reminders" />
            </div>
            <div className="profile">
            </div>
        </header>
       
        </div>
    );
}
 
export default Homepage;