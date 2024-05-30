import React, { useEffect, useState, useRef } from 'react';
import './Home.scss';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement } from 'chart.js';
import Heartcon from '../images/icons/bytesize--heart.svg';
import Notificationicon from '../images/icons/ic--baseline-notifications.svg';
import SearchIcon from '../images/icons/fluent--search-48-filled (1).svg';
import Remindericon from '../images/icons/hugeicons--apple-reminder.svg';
import ProfilePic from '../images/brian.jpeg';
import DoctorPic from '../images/brian.jpeg'; 
import WelcomImage from '../images/welcome.png';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const generateRandomHeartRate = () => Math.floor(Math.random() * (120 - 60 + 1) + 60);
const generateRandomBloodPressure = () => ({
  systolic: Math.floor(Math.random() * (150 - 90 + 1) + 90),
  diastolic: Math.floor(Math.random() * (90 - 60 + 1) + 60)
});
const generateRandomTemperature = () => Math.floor(Math.random() * (40 - 35 + 1) + 35);

const Homepage = () => {
  const [heartRateData, setHeartRateData] = useState([{ x: 0, y: generateRandomHeartRate() }]);
  const [bloodPressureData, setBloodPressureData] = useState(generateRandomBloodPressure());
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
      setBloodPressureData(generateRandomBloodPressure());
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
     
        <div className="quick-actions">
        <div className="welcome-message">
        <div className="img">
        <img src={WelcomImage} alt="Welcome" />
        </div>
        <div className="content">
        <h1>Welcome back, Sarah Smith!</h1>
        <p>We would like to take this opportunity to welcome you to our practice and to thank you for choosing our physicians to participate in your healthcare. We look forward to providing you with personalized, comprehensive health care focusing on wellness and prevention.</p>
        </div>
        
      </div>
        <div className="facts">
        <div className="appointments">
          <div className="apcon">

          </div>
          <div className="appointment-info">
          <h2>20</h2>
            <h3>Appointments</h3>
          </div>
        </div>
        <div className="health-costs">
          <div className="hccon">
          </div>

          <div className="health-costs-info">
            <h2>$2000</h2>
            <h3>Health Costs</h3>
            </div>
        </div>
        <div className="online-consultancy">
          <div className="occon">
          </div>
          <div className="online-consultancy-info">
            <h2>20</h2>
            <h3>Online Consultancy</h3>
          </div>
        </div>
        <div className="pending">
          <div className="pcon">
          </div>
          <div className="pending-info">
            <h2>10</h2>
            <h3>Pending</h3>
            </div>
        </div>

        </div>
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
              <div className="recent-illnesses">
                <h4>Recent Illnesses</h4>
                <div className="illnesses-container">
                  <div className="illness-card">
                    <div className="illness-info">
                      <span className="illness-name">common cold</span>
                      <span className="illness-date">2024-05-01</span>
                    </div>
                    <div className="status-icon ongoing"></div>
                  </div>
                  <div className="illness-card">
                    <div className="illness-info">
                      <span className="illness-name">Bronchitis</span>
                      <span className="illness-date">2024-05-15</span>
                    </div>
                    <div className="status-icon complete"></div>
                  </div>
                  <div className="illness-card">
                    <div className="illness-info">
                      <span className="illness-name">Stomach Flu</span>
                      <span className="illness-date">2024-05-25</span>
                    </div>
                    <div className="status-icon severe"></div>
                  </div>
                  <div className="illness-card">
                    <div className="illness-info">
                      <span className="illness-name">Tonsillitis</span>
                      <span className="illness-date">2024-06-02</span>
                    </div>
                    <div className="status-icon complete"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scheduled-appointments">
          <h4>Scheduled Appointments</h4>
          <div className="appoints">
          <div className="appointment">
            <div className="appointment-time">09:15am - 10:45am</div>
            <div className="appointment-details">
              <div className="doctor-info">
                <img src={DoctorPic} alt="Dr. Meculam" className="doctor-pic" />
                <div>
                  <div className="doctor-name">Dr. Meculam Deo</div>
                  <div className="appointment-type">Routine Checkup - Standard Consult</div>
                  <div className="contact-info">
                    <div className="contact-number">+1 142 536 7890</div>
                    <div className="billing-status">Billed</div>
                  </div>
                </div>
              </div>
              <div className="appointment-status">Starts in 15 min</div>
            </div>
          </div>
          <div className="appointment">
            <div className="appointment-time">11:00am - 12:00pm</div>
            <div className="appointment-details">
              <div className="doctor-info">
                <img src={DoctorPic} alt="Dr. Meculam" className="doctor-pic" />
                <div>
                  <div className="doctor-name">Dr. Meculam Deo</div>
                  <div className="appointment-type">Follow-up - Blood Test</div>
                  <div className="contact-info">
                    <div className="contact-number">+1 142 536 7890</div>
                    <div className="billing-status">Billed</div>
                  </div>
                </div>
              </div>
              <div className="appointment-status">Starts in 45 min</div>
            </div>
          </div>
          <div className="appointment">
            <div className="appointment-time">01:00pm - 02:30pm</div>
            <div className="appointment-details">
              <div className="doctor-info">
                <img src={DoctorPic} alt="Dr. Meculam" className="doctor-pic" />
                <div>
                  <div className="doctor-name">Dr. Meculam Deo</div>
                  <div className="appointment-type">Consultation - New Symptoms</div>
                  <div className="contact-info">
                    <div className="contact-number">+1 142 536 7890</div>
                    <div className="billing-status">Billed</div>
                  </div>
                </div>
              </div>
              <div className="appointment-status">Starts in 3 hrs</div>
            </div>
          </div>
          </div>
        </div>
        <div className="recent-medications">
          <h4>Recent Medications</h4>
          <div className="medication">
            <div className="medication-info">
              <div className="medication-name">Paracetamol</div>
              <div className="medication-dosage">500mg</div>
            </div>
            <div className="medication-status">Taken</div>
          </div>
          <div className="medication">
            <div className="medication-info">
              <div className="medication-name">Ibuprofen</div>
              <div className="medication-dosage">400mg</div>
            </div>
            <div className="medication-status">Taken</div>
          </div>
          <div className="medication">
            <div className="medication-info">
              <div className="medication-name">Amoxicillin</div>
              <div className="medication-dosage">500mg</div>
            </div>
            <div className="medication-status">Taken</div>
          </div>
          <div className="medication">
            <div className="medication-info">
              <div className="medication-name">Ciprofloxacin</div>
              <div className="medication-dosage">500mg</div>
            </div>
            <div className="medication-status">Taken</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
