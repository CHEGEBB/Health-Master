import React, { useEffect, useState } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  BarChart,
  Bar,
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import './UserProfile.scss';

const radarData = [
  { subject: 'Eating', A: 120, fullMark: 150 },
  { subject: 'Drinking', A: 98, fullMark: 150 },
  { subject: 'Running', A: 86, fullMark: 150 },
  { subject: 'Cycling', A: 99, fullMark: 150 },
];

const generateRandomData = () => Array.from({ length: 4 }, () => Math.floor(Math.random() * 150) + 50);

const Profile = () => {
  const [heartRateData, setHeartRateData] = useState([
    { name: 'Jan', value: 107 },
    { name: 'Feb', value: 105 },
    { name: 'Mar', value: 110 },
    { name: 'Apr', value: 115 },
  ]);

  const [glucoseRateData, setGlucoseRateData] = useState([
    { name: 'Jan', value: 97 },
    { name: 'Feb', value: 95 },
    { name: 'Mar', value: 100 },
    { name: 'Apr', value: 102 },
  ]);

  const [bloodPressureData, setBloodPressureData] = useState([
    { name: 'Jan', systolic: 120, diastolic: 80 },
    { name: 'Feb', systolic: 122, diastolic: 82 },
    { name: 'Mar', systolic: 118, diastolic: 78 },
    { name: 'Apr', systolic: 121, diastolic: 79 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRateData((prevData) =>
        prevData.map((data) => ({ ...data, value: Math.floor(Math.random() * 40) + 60 }))
      );
      setGlucoseRateData((prevData) =>
        prevData.map((data) => ({ ...data, value: Math.floor(Math.random() * 40) + 80 }))
      );
      setBloodPressureData((prevData) =>
        prevData.map((data) => ({
          ...data,
          systolic: Math.floor(Math.random() * 40) + 110,
          diastolic: Math.floor(Math.random() * 20) + 70,
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
      <div className="patient-details">
            <div className="detail">
              <h3>Blood Type</h3>
              <p>AB+</p>
            </div>
            <div className="detail">
              <h3>Allergies</h3>
              <p>Penicillin, peanuts</p>
            </div>
            <div className="detail">
              <h3>Diseases</h3>
              <p>Diabetes</p>
            </div>
            <div className="detail">
              <h3>Pressure</h3>
              <p>130/80 mmHG</p>
            </div>
            <div className="detail">
              <h3>Temperature</h3>
              <p>36.8 Degree</p>
            </div>
            <div className="detail">
              <h3>Regular Checkups</h3>
              <p>Dr Anthony Wager, Dermatologist</p>
              <p>Dr Smith Wright, Clinical Doctor</p>
              <p>Dr Tom Humpton, Dentist</p>
              <p>Dr Riphat Jion, Surgeon</p>
            </div>
          </div>
        <div className="health-details">
          <h2>Health Metrics</h2>
          <div className="health-metrics">
            <div className="metric">
              <h3>Blood Pressure</h3>
              <ResponsiveContainer width="100%" height={150}>
                <LineChart data={bloodPressureData}>
                  <Line type="monotone" dataKey="systolic" stroke="#8884d8" />
                  <Line type="monotone" dataKey="diastolic" stroke="#82ca9d" />
                  <XAxis dataKey="name" />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="metric">
              <h3>Heart Rate</h3>
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={heartRateData}>
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="metric">
              <h3>Glucose Rate</h3>
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={glucoseRateData}>
                  <Bar dataKey="value" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <h2>Patient Activities</h2>
          <div className="health-graphs">
            <ResponsiveContainer width="100%" height={300}>
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
