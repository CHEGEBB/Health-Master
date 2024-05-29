import React, { useEffect, useState, useRef } from 'react';
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
import Heartcon from '../images/icons/bytesize--heart.svg';

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
  const [heartRateData, setHeartRateData] = useState([{ x: 0, y: generateRandomHeartRate() }]);
  const chartRef = useRef(null);
  let xValue = useRef(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRateData((prevData) => {
        const newData = [...prevData, { x: xValue.current, y: generateRandomHeartRate() }];
        xValue.current += 1;
        if (chartRef.current) {
          chartRef.current.update('quiet');
        }
        return newData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const data = {
    datasets: [
      {
        label: 'Heart Rate',
        data: heartRateData,
        fill: false,
        borderColor: '#FF0000',
        tension: 0.1,
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        min: heartRateData.length > 20 ? heartRateData[heartRateData.length - 20].x : 0,
        max: heartRateData.length > 20 ? heartRateData[heartRateData.length - 1].x : 20,
        grid : {
            display: false
        },
        ticks: {
          stepSize: 1
        }
      },
      y: {
        min: 50,
        max: 130,
        
      },
  
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
          <div className="heartRate">
          <div className="rate">
          <h4>Heart Rate</h4>
          </div>
          <div className="heartcon">
          <img src={Heartcon} alt="Heart Rate" />
          </div>
          </div>
            <div className="heart-rate-value">
                <p>{heartRateData[heartRateData.length - 1].y}/118</p>
            </div>
            <div className="graph-for-heartrate">
              <Line ref={chartRef} data={data} options={options} />
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
