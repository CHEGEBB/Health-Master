import React, { useState, useEffect, useRef } from 'react';
import './HealthGoals.scss';

const HealthGoals = () => {
    const [activeGoal, setActiveGoal] = useState('exercise');
    const goalsData = {
        exercise: { progress: 4, total: 10, color: '#4caf50' },
        nutrition: { progress: 3, total: 10, color: '#ff5722' },
        sleep: { progress: 2, total: 10, color: '#9c27b0' },
        drugUsage: { progress: 1, total: 10, color: '#f44336' },
        mentalHealth: { progress: 5, total: 10, color: '#2196f3' },
    };

    const handleGoalClick = (goal) => {
        setActiveGoal(goal);
    };

    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        const scrollWidth = scrollContainer.scrollWidth;
        const clientWidth = scrollContainer.clientWidth;

        let scrollPosition = 0;

        const scroll = () => {
            scrollPosition += 1;
            if (scrollPosition > scrollWidth - clientWidth) {
                scrollPosition = 0;
            }
            scrollContainer.scrollLeft = scrollPosition;
        };

        const interval = setInterval(scroll, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="health-goals">
            <h1>Health Goals</h1>
            <div className="goal-progress" ref={scrollContainerRef}>
                {Object.keys(goalsData).map((goal) => (
                    <div
                        key={goal}
                        className={`progress-item ${goal === activeGoal ? 'active' : ''}`}
                        onClick={() => handleGoalClick(goal)}
                        style={{ backgroundColor: goalsData[goal].color }}
                    >
                        <span className="progress-label">{goal}</span>
                        <div className="progress-circle">
                            <svg viewBox="0 0 36 36" className="circular-chart">
                                <path
                                    className="circle-bg"
                                    d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path
                                    className="circle"
                                    strokeDasharray={`${(goalsData[goal].progress / goalsData[goal].total) * 100}, 100`}
                                    d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                    style={{ stroke: goalsData[goal].color }}
                                />
                            </svg>
                            <span className="progress-value">{`${goalsData[goal].progress}/${goalsData[goal].total}`}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HealthGoals;
