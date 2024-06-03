import React from 'react';
import './HealthGoals.scss';
import strong from '../images/icons/docs/icon-park-twotone--muscle.svg';
import run from '../images/icons/docs/ic--sharp-directions-run.svg';
import sleep from '../images/icons/docs/mdi--sleep-schedule.svg';
import cycle from '../images/icons/docs/bx--cycling.svg';

const HealthGoals = () => {
    return(
    <div className="health-goals">
<div className="goals">
<div className="progress">
    <div className="progress-row1">
        <div className="weekly-progress-workout">
        <div className="prog">
        <div className="procon">
            <img src={strong} alt="strong" />
        </div>
        <div className="det1">
        <h2>Workout Progress</h2>
            <p>40%</p>
        </div>
        </div>
            <div className="progress-bar">
                <div className="progress-bar-fill">
                    <div className="progress-bar-fill-text">50%</div>
                </div>
            </div>
        </div>
        <div className="weekly-progress-run">
        <div className="prog">
        <div className="procon">
            <img src={run} alt="run" />
        </div>
        <div className="det1">

            <h2>Run Progress</h2>
            <p>25%</p>
        </div>
        </div>
        
            <div className="progress-bar">
                <div className="progress-bar-fill">
                    <div className="progress-bar-fill-text">25%</div>
                </div>
            </div>
        </div>
    </div>
    <div className="progress-row2">
        <div className="weekly-progress-sleep">
        <div className="prog">
        <div className="procon">
            <img src={sleep} alt="sleep" />
        </div>
        <div className="det1">
            <h2>Sleep Management</h2>
            <p>30%</p>
        </div>
        </div>
            <div className="progress-bar">
                <div className="progress-bar-fill">
                    <div className="progress-bar-fill-text">40%</div>
                </div>
            </div>
        </div>
        <div className="weekly-progress-cycling">
        <div className="prog">
        <div className="procon">
            <img src={cycle} alt="cycle" />
        </div>
        <div className="det1">
            <h2>Cycling Progress</h2>
            <p>40%</p>
        </div>
        </div>
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
