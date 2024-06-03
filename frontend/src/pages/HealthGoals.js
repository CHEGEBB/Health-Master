import React, { useEffect, useRef,useState } from 'react';
import Chart from 'chart.js/auto'; 
import './HealthGoals.scss';
import strong from '../images/icons/docs/icon-park-twotone--muscle.svg';
import run from '../images/icons/docs/ic--sharp-directions-run.svg';
import sleep from '../images/icons/docs/mdi--sleep-schedule.svg';
import cycle from '../images/icons/docs/bx--cycling.svg';

const HealthGoals = () => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null); 
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy(); 
            }
            const ctx = chartRef.current.getContext('2d');
            chartInstanceRef.current = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                    datasets: [
                        {
                            label: 'Walking Progress',
                            data: [32, 26, 35, 49, 36, 43], 
                            borderColor: '#ff1493', 
                            fill: false,
                        },
                        {
                            label: 'Running Progress',
                            data: [24, 44, 47, 29, 23, 49], 
                            borderColor: '#7b68ee', 
                            fill: false,
                        },
                        {
                            label: 'Cycling Progress',
                            data: [23, 24, 35, 46, 30, 50], 
                            borderColor: '#00fa9a',
                            fill: false,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            grid: {
                                display: false,
                            },
                        },
                        y: {
                            grid: {
                                display: false,
                                color: '#ddd',
                            },
                        },
                    },
                },
            });
        }
    }, []);

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
<div className="practice">
<h2>Exercise Progress</h2>
<p>Here is your weekly exercise progress. Keep it up!</p>
<div className="exercise-visual">
                <canvas ref={chartRef} width={700} height={400} />
            </div>
            </div>
            <div className="plan-list">
            <h2>Plan List</h2>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <nav>
                <ul>
                    <li>All</li>
                    <li>Unfinished</li>
                    <li>Finished</li>
                    <li>4</li>
                </ul>
            </nav>
            <div className="plan-item">
                <div className="day">Mon</div>
                <div>Routine Cardio Burn Workout</div>
                <div>UNFINISHED</div>
                <div>Running</div>
                <div>5</div>
                <div className="buttons">
                    <button>Start Workout</button>
                    <div className="options" onClick={toggleOptions}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"/>
                            <path d="M12 5a7 7 0 0 1 7 7 7 7 0 0 1-7 7 7 7 0 0 1-7-7 7 7 0 0 1 7-7zm0-2a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9zm0 2c5.522 0 10 4.477 10 10s-4.478 10-10 10-10-4.477-10-10 4.478-10 10-10zm1 3h-2v6h2V8z"/>
                        </svg>
                        {showOptions && (
                            <div className="dropdown-menu">
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="plan-item">
                <div className="day">Tue</div>
                <div>Total Body Yoga Workout</div>
                <div>On Progress</div>
                <div>Yoga</div>
                <div>3</div>
                {/* Buttons and options go here */}
            </div>
            <div className="plan-item">
                <div className="day">Sun</div>
                <div>Routine Cardio Burn Workout</div>
                <div>UNFINISHED</div>
                <div>Cycling</div>
                <div>28</div>
                {/* Buttons and options go here */}
            </div>
            <div className="plan-item">
                <div className="day">Fri</div>
                <div>Weekly Routine Cycling</div>
                <div>Finished34Km00:23:45</div>
                <div>Cycling</div>
                <div>21</div>
                {/* Buttons and options go here */}
            </div>
            <div className="plan-item">
                <div className="day">Tue</div>
                <div>2020 Runner Event Workout</div>
                <div>Finished34Km00:23:45</div>
                <div>Running</div>
                <div>18</div>
                {/* Buttons and options go here */}
            </div>
            <div className="plan-item">
                <div className="day">Sat</div>
                <div>Daily Running Workout</div>
                <div>Finished34Km00:23:45</div>
                <div>Running</div>
                <div>added below the practice</div>
                {/* Buttons and options go here */}
            </div>
        </div>

            
</div>
    </div>
    );
};

export default HealthGoals;
