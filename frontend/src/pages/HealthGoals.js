import React from 'react';
import './HealthGoals.scss';

const HealthGoals = () => {
    return(
    <div className="health-goals">
<div className="goals">
<div className="progress">
    <div className="progress-row1">
        <div className="weekly-progress-workout">
            <h2>Weekly Progress</h2>
            <div className="progress-bar">
                <div className="progress-bar-fill">
                    <div className="progress-bar-fill-text">50%</div>
                </div>
            </div>
        </div>
        <div className="weekly-progress-run">
            <h2>Weekly Progress</h2>
            <div className="progress-bar">
                <div className="progress-bar-fill">
                    <div className="progress-bar-fill-text">25%</div>
                </div>
            </div>
        </div>
    </div>
    <div className="progress-row2">
        <div className="weekly-progress-sleep">
            <h2>Weekly Progress</h2>
            <div className="progress-bar">
                <div className="progress-bar-fill">
                    <div className="progress-bar-fill-text">40%</div>
                </div>
            </div>
        </div>
        <div className="weekly-progress-cycling">
            <h2>Weekly Progress</h2>
            <div className="progress-bar">
                <div className="progress-bar-fill">
                    <div className="progress-bar-fill-text">20%</div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    </div>
    );
};

export default HealthGoals;
