import React from 'react';
import './HealthGoals.scss';

const HealthGoals = () => {
    return ( 
        <div className='health-goals'>
            <h1>Health Goals</h1>
            <div className='goal'>
                <h2>Weight Management</h2>
                <div className='progress'>
                    <div className='progress-bar' style={{width: '70%'}}></div>
                    <span>70%</span>
                </div>
            </div>
            <div className='goal'>
                <h2>Exercise</h2>
                <div className='progress'>
                    <div className='progress-bar' style={{width: '50%'}}></div>
                    <span>50%</span>
                </div>
            </div>
            {/* Add more goals here */}
        </div>
     );
}
 
export default HealthGoals;
