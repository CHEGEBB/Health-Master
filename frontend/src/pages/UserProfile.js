import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, BarChart, Bar, ResponsiveContainer } from 'recharts';
import './UserProfile.scss';

const radarData = [
  { subject: 'Eating', A: 120, fullMark: 150 },
  { subject: 'Drinking', A: 98, fullMark: 150 },
  { subject: 'Running', A: 86, fullMark: 150 },
  { subject: 'Cycling', A: 99, fullMark: 150 },
];

const heartRateData = [{ name: 'Heart Rate', value: 107 }];
const glucoseRateData = [{ name: 'Glucose Rate', value: 97 }];

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="personal-details">
        <div className="person">
          <div className="bg"></div>
          <div className="profile-pic">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Avatar"
              className="avatar"
            />
          </div>
          <div className="person-name">
            <h1>John Doe</h1>
          </div>
          <div className="person-email">
            <p>john.doe@example.com</p>
          </div>
          <div className="edit">
            <button>Edit Profile</button>
          </div>
        </div>
        <div className="private-details">
          <div className="details">
            <div className="row1">
              <div className="detail">
                <h3>Sex</h3>
                <p>Male</p>
              </div>
              <div className="detail">
                <h3>Age</h3>
                <p>24</p>
              </div>
              <div className="detail">
                <h3>Blood Group</h3>
                <p>AB+</p>
              </div>
              <div className="detail">
                <h3>Marital Status</h3>
                <p>Single</p>
              </div>
            </div>
            <div className="row2">
              <div className="detail">
                <h3>Status</h3>
                <p>Active</p>
              </div>
              <div className="detail">
                <h3>Date of Birth</h3>
                <p>01/01/2000</p>
              </div>
              <div className="detail">
                <h3>Height</h3>
                <p>170cm</p>
              </div>
              <div className="detail">
                <h3>Weight</h3>
                <p>70kg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="other-details">
        <div className="health-details">
          <h2>Health Metrics</h2>
          <div className="health-metrics">
            <div className="metric">
              <h3>Blood Pressure</h3>
              <p>130/80 mmHG</p>
            </div>
            <div className="metric">
              <h3>Heart Rate</h3>
              <ResponsiveContainer width="100%" height={100}>
                <BarChart data={heartRateData}>
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="metric">
              <h3>Glucose Rate</h3>
              <ResponsiveContainer width="100%" height={100}>
                <BarChart data={glucoseRateData}>
                  <Bar dataKey="value" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <h2>Patient Activities</h2>
          <div className="health-graphs">
            <ResponsiveContainer width="100%" height={200}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Activities" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
