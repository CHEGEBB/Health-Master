import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './UserProfile.scss';

const Profile = () => {
  const [userName, setUserName] = useState('Brian');
  const [userEmail, setUserEmail] = useState('brayo@gmail.com');
  const [userPhone, setUserPhone] = useState('0712345678');
  const [profilePic, setProfilePic] = useState(null);
  const [appointments, setAppointments] = useState([
    { date: new Date(2024, 5, 15), description: 'Annual Checkup' },
    { date: new Date(2024, 6, 10), description: 'Dentist Appointment' },
  ]);

  const handleProfilePicChange = (e) => {
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const appointment = appointments.find(
        (app) => app.date.toDateString() === date.toDateString()
      );
      return appointment ? <p className="appointment-marker">📅</p> : null;
    }
    return null;
  };

  return (
    <div className="profile-container">
      <div className="personal-details">
        <div className="profile-pic">
          {profilePic ? (
            <img src={profilePic} alt="Profile" />
          ) : (
            <div className="placeholder-pic">No Image</div>
          )}
          <input type="file" onChange={handleProfilePicChange} />
        </div>
        <div className="user-details">
          <div className="user-name">
            <p>{userName}</p>
            <button>Edit</button>
          </div>
          <div className="user-email">
            <p>{userEmail}</p>
            <button>Edit</button>
          </div>
          <div className="user-phone">
            <p>{userPhone}</p>
            <button>Edit</button>
          </div>
        </div>
      </div>
      <div className="health-details">
        <div className="column1">
          <div className="gender-info">
            <h2>Gender</h2>
            <p>Male</p>
          </div>
          <div className="dob-info">
            <h2>Date of Birth</h2>
            <p>01/01/2000</p>
          </div>
          <div className="blood-type-info">
            <h2>Blood Type</h2>
            <p>A+</p>
          </div>
          <div className="height-info">
            <h2>Height</h2>
            <p>170cm</p>
          </div>
        </div>
        <div className="column2">
          <div className="weight-info">
            <h2>Weight</h2>
            <p>70kg</p>
          </div>
          <div className="allergies-info">
            <h2>Allergies</h2>
            <p>None</p>
          </div>
          <div className="medications-info">
            <div className="prescribed-drugs">
              <h2>Prescribed Drugs</h2>
              <p>None</p>
            </div>
          </div>
          <div className="city-info">
            <h2>City</h2>
            <p>Nairobi</p>
          </div>
        </div>
      </div>
      <div className="health-reports">
        <h2>Health Reports:</h2>
        <div className="report">
          <div className="bp">
            <h3>Blood Pressure</h3>
          </div>
          <div className="value">
            <p>120/80</p>
          </div>
          <div className="date">
            <h3>12/06/24</h3>
          </div>
        </div>
        <div className="report">
          <div className="checkup">
            <h3>Checkup</h3>
          </div>
          <div className="value">
            <p>Normal</p>
          </div>
          <div className="date">
            <h3>12/06/24</h3>
          </div>
        </div>
        <div className="report">
          <div className="temperature">
            <h3>Temperature</h3>
          </div>
          <div className="value">
            <p>36.5</p>
          </div>
          <div className="date">
            <h3>12/06/24</h3>
          </div>
        </div>
      </div>
      <div className="health-habits">
        <h2>Healthy Habits</h2>
        <table>
          <thead>
            <tr>
              <th>Habit</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cups of Water Drank</td>
              <td>8</td>
            </tr>
            <tr>
              <td>Physical Exams</td>
              <td>Annual</td>
            </tr>
            <tr>
              <td>Doctor Appointments</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="calendar">
        <h2>Appointment Calendar</h2>
        <div className="calendar-container">
          <Calendar
            tileContent={tileContent}
            className="custom-calendar"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
