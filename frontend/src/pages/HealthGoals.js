import React from 'react';
import './HealthGoals.scss';

const HealthGoals = () => {
    return(
    <div className="health-goals">
    <div className="goals">
        <div className="fitness-goals">
            <h3>Fitness Goals</h3>
        </div>
        <div className="nutritional-goals">
            <h3>Nutritional Goals</h3>
        </div>
        <div className="sleep-goals">
            <h3>Sleep Goals</h3>
        </div>
        <div className="mental-goals">
            <h3>Mental Health Goals</h3>
            </div>
        <div className="social-goals">
            <h3>Social Goals</h3>
            </div>
    </div>

    </div>
    );
};

export default HealthGoals;
