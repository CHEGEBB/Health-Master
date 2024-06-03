import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import './HealthGoals.scss';
import strong from '../images/icons/docs/icon-park-twotone--muscle.svg';
import run from '../images/icons/docs/ic--sharp-directions-run.svg';
import sleep from '../images/icons/docs/mdi--sleep-schedule.svg';
import cycle from '../images/icons/docs/bx--cycling.svg';
import verticalDotsIcon from '../images/icons/docs/cil--options.svg'; 

const HealthGoals = () => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);
    const [showOptions, setShowOptions] = useState(null);

    const toggleOptions = (index) => {
        setShowOptions(showOptions === index ? null : index);
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

    const plans = [
        { day: 'Mon', title: 'Routine Cardio Burn Workout', status: 'UNFINISHED', type: 'Running', value: 5 },
        { day: 'Tue', title: 'Total Body Yoga Workout', status: 'IN PROGRESS', type: 'Yoga', value: 3 },
        { day: 'Sun', title: 'Routine Cardio Burn Workout', status: 'UNFINISHED', type: 'Cycling', value: 28 },
        { day: 'Fri', title: 'Weekly Routine Cycling', status: 'FINISHED', type: 'Cycling', value: 34},
        { day: 'Tue', title: '2020 Runner Event Workout', status: 'FINISHED', type: 'Running', value: 24 },
        { day: 'Sat', title: 'Daily Running Workout', status: 'FINISHED:20KM', type: 'Running', value: 20 }
    ];

    return (
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
                    {plans.map((plan, index) => (
                        <div key={index} className="plan-item">
                            <div className="day">{plan.day}</div>
                            <div className="plan-details">
                                <div className="plan-title">{plan.title}</div>
                                <div className="plan-status">{plan.status}</div>
                                <div className="plan-type">{plan.type}</div>
                                <div className="plan-value">{plan.value}</div>
                                <div className="plan-actions">
                                    <button className="start-workout">Start Workout</button>
                                    <div className="options" onClick={() => toggleOptions(index)}>
                                        <img src={verticalDotsIcon} alt="Options" />
                                        {showOptions === index && (
                                            <div className="dropdown-menu">
                                                <button>Edit</button>
                                                <button>Delete</button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HealthGoals;
