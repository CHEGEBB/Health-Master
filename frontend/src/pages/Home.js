import React from 'react';
import './Home.scss';
import Notificationicon from '../images/icons/ic--baseline-notifications.svg';
import SearchIcon from '../images/icons/fluent--search-48-filled (1).svg';
import Remindericon from '../images/icons/hugeicons--apple-reminder.svg';
import ProfilePic from '../images/brian.jpeg';

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
                    <img className="profile-pic" src={ProfilePic} alt="Profile" />
                    <div className="profile-info">
                        <span className="profile-name">John Doe</span>
                        <span className="profile-email">john.doe@example.com</span>
                    </div>
                </div>
            </header>
            <div className="main">
            <div className="health-stats">

            </div>
            <div className="my-doctors">
                
            </div>
            </div>
        </div>
    );
}

export default Homepage;
