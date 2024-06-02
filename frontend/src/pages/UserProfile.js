import React from 'react';
import './UserProfile.scss';
import Doctor1 from '../images/2(2).jpg';
import Doctor2 from '../images/3(1).jpg';
import Doctor3 from '../images/5.jpg';
import Doctor4 from '../images/1(2).jpg';
import user from "../images/smith.jpg";
import downloadIcon from '../images/icons/docs/line-md--arrow-align-bottom.svg';

const Profile = () => {
  const patientHistory = [
    {
      dateOfVisit: '02/06/24',
      diagnosis: 'Malaria',
      severity: 'High',
      totalVisits: 3,
      status: 'Under Treatment',
      documents: 'path/to/document1.pdf'
    },
    {
      dateOfVisit: '01/05/24',
      diagnosis: 'Flu',
      severity: 'Low',
      totalVisits: 1,
      status: 'Recovered',
      documents: 'path/to/document2.pdf'
    }
  ];

  return (
    <div className="profile-container">
      <div className="personal-details">
        <div className="person">
          <div className="bg"></div>
          <div className="profile-pic">
            <img
              src={user}
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
          <h2>My Health Stats</h2>
          <div className="detail">
            <div className="detail-content">
              <div className="det">
                <h3>Blood Type</h3>
              </div>
              <div className="val">
                <p>AB+</p>
              </div>
            </div>
          </div>
          <div className="detail">
            <div className="detail-content">
              <div className="det">
                <h3>Allergies</h3>
              </div>
              <div className="val">
                <p>Penicillin, peanuts</p>
              </div>
            </div>
          </div>
          <div className="detail">
            <div className="detail-content">
              <div className="det">
                <h3>Diseases</h3>
              </div>
              <div className="val">
                <p>Diabetes</p>
              </div>
            </div>
          </div>
          <div className="detail">
            <div className="detail-content">
              <div className="det">
                <h3>Pressure</h3>
              </div>
              <div className="val">
                <p>130/80 mmHG</p>
              </div>
            </div>
          </div>
          <div className="detail">
            <div className="detail-content">
              <div className="det">
                <h3>Blood Pressure</h3>
              </div>
              <div className="val">
                <p>120/80 mmHG</p>
              </div>
            </div>
          </div>
        </div>
        <div className="check-ups">
          <h2>My Doctors</h2>
          <div className="check-up">
            <img src={Doctor1} alt="Dr Chealsea Green" className="doctor-photo" />
            <div className="doc">
              <h3>Dr Chealsea Green</h3>
              <p>Dermatologist</p>
            </div>
            <button className="delete-button">Delete</button>
          </div>
          <div className="check-up">
            <img src={Doctor2} alt="Dr Jane Wright" className="doctor-photo" />
            <div className="doc">
              <h3>Dr Jane Wright</h3>
              <p>Clinical Doctor</p>
            </div>
            <button className="delete-button">Delete</button>
          </div>
          <div className="check-up">
            <img src={Doctor3} alt="Dr Tom Melendez" className="doctor-photo" />
            <div className="doc">
              <h3>Dr Tom Melendez</h3>
              <p>Dentist</p>
            </div>
            <button className="delete-button">Delete</button>
          </div>
          <div className="check-up">
            <img src={Doctor4} alt="Dr Riphat Jion" className="doctor-photo" />
            <div className="doc">
              <h3>Dr Riphat Jion</h3>
              <p>Surgeon</p>
            </div>
            <button className="delete-button">Delete</button>
          </div>
        </div>
      </div>
      <div className="patient-history">
          <h2>Patient History</h2>
          {patientHistory.map((item, index) => (
            <div className="history-item" key={index}>
              <div className="history-content">
                <div className="history-detail">
                  <h3>Date of Visit</h3>
                  <p>{item.dateOfVisit}</p>
                </div>
                <div className="history-detail">
                  <h3>Diagnosis</h3>
                  <p>{item.diagnosis}</p>
                </div>
                <div className="history-detail">
                  <h3>Severity</h3>
                  <p>{item.severity}</p>
                </div>
                <div className="history-detail">
                  <h3>Total Visits</h3>
                  <p>{item.totalVisits}</p>
                </div>
                <div className="history-detail">
                  <h3>Status</h3>
                  <p>{item.status}</p>
                </div>
                <div className="history-detail">
                  <h3>Documents</h3>
                  <a href={item.documents} download>
                    <img src={downloadIcon} alt="Download" className="download-icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Profile;
