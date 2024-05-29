import React, { useEffect, useState, useRef } from 'react';
import './Home.scss';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, LineElement, Title, Tooltip } from 'chart.js';
import Heartcon from '../images/icons/bytesize--heart.svg';
import Notificationicon from '../images/icons/ic--baseline-notifications.svg';
import SearchIcon from '../images/icons/fluent--search-48-filled (1).svg';
import Remindericon from '../images/icons/hugeicons--apple-reminder.svg';
import ProfilePic from '../images/brian.jpeg';

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const generateRandomHeartRate = () => Math.floor(Math.random() * (120 - 60 + 1) + 60);
const generateRandomBloodPressure = () => ({
  systolic: Math.floor(Math.random() * (150 - 90 + 1) + 90),
  diastolic: Math.floor(Math.random() * (90 - 60 + 1) + 60)
});

const Homepage = () => {
  const [heartRateData, setHeartRateData] = useState([{ x: 0, y: generateRandomHeartRate() }]);
  const [bloodPressureData, setBloodPressureData] = useState(generateRandomBloodPressure());
  const [ecgData, setEcgData] = useState(Array.from({ length: 100 }, () => Math.random() * 0.6 - 0.3));
  const chartRef = useRef(null);
  let xValue = useRef(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRateData(prevData => {
        const newData = [...prevData, { x: xValue.current, y: generateRandomHeartRate() }];
        xValue.current += 1;
        if (chartRef.current) {
          chartRef.current.update('quiet');
        }
        return newData;
      });
      setBloodPressureData(generateRandomBloodPressure());

      // Update the ECG data with a rugged pattern
      const newEcgData = Array.from({ length: 100 }, () => Math.random() * 0.6 - 0.3);
      setEcgData(newEcgData);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const heartRateChartData = {
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

  const bloodPressureChartData = {
    labels: ['Systolic', 'Diastolic'],
    datasets: [
      {
        label: 'Blood Pressure',
        data: [bloodPressureData.systolic, bloodPressureData.diastolic],
        backgroundColor: ['#FF0000', '#0000FF']
      }
    ]
  };

  const ecgChartData = {
    labels: Array.from({ length: 100 }, (_, i) => i),
    datasets: [
      {
        label: 'ECG',
        data: ecgData,
        fill: false,
        borderColor: '#000000',
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
        grid: {
          display: false
        },
        ticks: {
          stepSize: 1,
          color: 'white'
        }
      },
      y: {
        min: 50,
        max: 130,
        ticks: {
          color: 'white'
        }
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
          <input type="text" name="search" placeholder="Search" />
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
          <div className="stats">
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
                <Line ref={chartRef} data={heartRateChartData} options={options} />
              </div>
            </div>
            <div className="ecg-graph">
              <h4>Heart ECG</h4>
              <div className="graph-for-ecg">
                <Line ref={chartRef} data={ecgChartData} options={options} />
              </div>
            </div>
            <div className="blood-pressure">
              <h4>Blood Pressure</h4>
              <div className="blood-pressure-value">
                <p>{bloodPressureData.systolic}/{bloodPressureData.diastolic}</p>
              </div>
              <div className="graph-for-blood-pressure">
                <Bar data={bloodPressureChartData} />
              </div>
            </div>
            <div className="diagnosis-stats">
              <div className="body-temperature">
                <h4>Body Temperature</h4>
                <div className="body-temperature-value">
                  <p>36.8°C</p>
                </div>
              </div>
          <div class="recent-illnesses">
    <h4>Recent Illnesses</h4>
    <div class="illnesses-container">
        <div class="illness-card">
            <div class="illness-info">
                <span class="illness-name">common cold</span>
                <span class="illness-date">2024-05-01</span>
            </div>
            <div class="status-icon ongoing"></div>
        </div>
        <div class="illness-card">
            <div class="illness-info">
                <span class="illness-name">
                    Bronchitis
                </span>
                <span class="illness-date">2024-05-15</span>
            </div>
            <div class="status-icon complete"></div>
        </div>
        <div class="illness-card">
            <div class="illness-info">
                <span class="illness-name">
                Stomach Flu
                </span>
                <span class="illness-date">2024-05-25</span>
            </div>
            <div class="status-icon severe"></div>
        </div>
        <div class="illness-card">
            <div class="illness-info">
                <span class="illness-name">Tonsillitis</span>
                <span class="illness-date">2024-06-02</span>
            </div>
            <div class="status-icon complete"></div>
        </div>
    </div>
</div>

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
