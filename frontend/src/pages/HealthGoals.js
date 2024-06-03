import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; 
import './HealthGoals.scss';
import strong from '../images/icons/docs/icon-park-twotone--muscle.svg';
import run from '../images/icons/docs/ic--sharp-directions-run.svg';
import sleep from '../images/icons/docs/mdi--sleep-schedule.svg';
import cycle from '../images/icons/docs/bx--cycling.svg';

const HealthGoals = () => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null); 

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
                            data: [32, 26, 35, 55, 36, 43], 
                            borderColor: 'red', 
                            fill: false,
                        },
                        {
                            label: 'Running Progress',
                            data: [24, 44, 47, 29, 23, 49], 
                            borderColor: 'blue', 
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
<div className="exercise-visual">
                <canvas ref={chartRef} width={900} height={400} />
            </div>
</div>
    </div>
    );
};

export default HealthGoals;
