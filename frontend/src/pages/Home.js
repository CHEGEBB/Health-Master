import React, { useEffect, useState } from 'react';
import './Home.scss';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import Notificationicon from '../images/icons/ic--baseline-notifications.svg';
import SearchIcon from '../images/icons/fluent--search-48-filled (1).svg';
import Remindericon from '../images/icons/hugeicons--apple-reminder.svg';
import ProfilePic from '../images/brian.jpeg';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const generateRandomHeartRate = () => Math.floor(Math.random() * (120 - 60 + 1) + 60);

const Homepage = () => {
  const [heartRateData, setHeartRateData] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRateData((prevData) => {
        const newData = [...prevData, generateRandomHeartRate()];
        if (newData.length > 20) newData.shift(); // Keep the array length constant
        return newData;
      });

      setLabels((prevLabels) => {
        const newLabels = [...prevLabels, prevLabels.length + 1];
        if (newLabels.length > 20) newLabels.shift(); // Keep the array length constant
        return newLabels;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: 'Heart Rate',
        data: heartRateData,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      },
      y: {
        min: 50,
        max: 130
      }
    },
    animation: {
      duration: 1000,
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true
      }
    }
  };

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
          <h2>My Health Stats</h2>
          <div className="heart-rate">
            <h4>Heart Rate</h4>
            <div className="graph-for-heartrate">
              <Line data={data} options={options} />
            </div>
          </div>
        </div>
        <div className="my-doctors">
          {/* Add content here if needed */}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
