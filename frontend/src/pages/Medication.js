import React from 'react';
import './Medication.scss';

const prescriptions = [
    { id: 'A348', title: 'Prescription 1', createdBy: 'Dr. Jacob Ryan', date: '12/05/2016', disease: 'Fever' },
    { id: 'A645', title: 'Prescription 2', createdBy: 'Dr. Rajesh', date: '12/05/2016', disease: 'Cholera' },
    { id: 'A873', title: 'Prescription 3', createdBy: 'Dr. Jay Soni', date: '12/05/2016', disease: 'Jaundice' },
    { id: 'A927', title: 'Prescription 4', createdBy: 'Dr. John Deo', date: '12/05/2016', disease: 'Typhoid' },
    { id: 'A228', title: 'Prescription 5', createdBy: 'Dr. Megha Trivedi', date: '12/05/2016', disease: 'Malaria' },
    { id: 'A345', title: 'Prescription 6', createdBy: 'Dr. Sarah Smith', date: '12/05/2016', disease: 'Infection' },
    { id: 'A765', title: 'Prescription 7', createdBy: 'Dr. Jacob Ryan', date: '12/05/2016', disease: 'Fever' },
    { id: 'A125', title: 'Prescription 8', createdBy: 'Dr. Rajesh', date: '12/05/2016', disease: 'Cholera' },
];

const Medication = () => {
    return (
        <div className='medication'>
            <h1>Medication</h1>
            <table className='prescription-table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Created by</th>
                        <th>Date</th>
                        <th>Diseases</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {prescriptions.map((prescription, index) => (
                        <tr key={prescription.id}>
                            <td>{prescription.id}</td>
                            <td>{prescription.title}</td>
                            <td>{prescription.createdBy}</td>
                            <td>{prescription.date}</td>
                            <td className={`disease ${prescription.disease.toLowerCase()}`}>{prescription.disease}</td>
                            <td className='actions'>
                                <button className='download'>Download</button>
                                <button className='delete'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Medication;
