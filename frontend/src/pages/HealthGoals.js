import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Chart from 'chart.js/auto';
import { Howl } from 'howler';
import './HealthGoals.scss';

const HealthGoals = () => {
    const [activeGoal, setActiveGoal] = useState('exercise');
    const [goalsData, setGoalsData] = useState({
        exercise: {
            progress: 70,
            subGoals: ['Workout Types', 'Duration', 'Intensity'],
            selectedSubGoal: 'Workout Types',
            data: {
                labels: ['Cardio', 'Strength Training', 'Flexibility'],
                datasets: [{
                    label: 'Workout Types',
                    data: [30, 40, 30],
                    backgroundColor: ['#4caf50', '#2196f3', '#ffc107'],
                }],
            },
        },
        nutrition: {
            progress: 50,
            subGoals: ['Fruits', 'Vegetables', 'Protein'],
            selectedSubGoal: 'Fruits',
            data: {
                labels: ['Fruits', 'Vegetables', 'Protein'],
                datasets: [{
                    label: 'Nutrition',
                    data: [50, 30, 20],
                    backgroundColor: ['#4caf50', '#ff5722', '#ffc107'],
                }],
            },
        },
        sleep: {
            progress: 80,
            subGoals: ['Duration', 'Quality', 'Consistency'],
            selectedSubGoal: 'Duration',
            data: {
                labels: ['Duration', 'Quality', 'Consistency'],
                datasets: [{
                    label: 'Sleep',
                    data: [60, 20, 20],
                    backgroundColor: ['#4caf50', '#9c27b0', '#ffc107'],
                }],
            },
        },
        drugUsage: {
            progress: 20,
            subGoals: ['Smoking', 'Alcohol'],
            selectedSubGoal: 'Smoking',
            data: {
                labels: ['Smoking', 'Alcohol'],
                datasets: [{
                    label: 'Drug Usage',
                    data: [20, 30],
                    backgroundColor: ['#f44336', '#2196f3'],
                }],
            },
        },
        mentalHealth: {
            progress: 90,
            subGoals: ['Stress Management', 'Mindfulness', 'Hobbies'],
            selectedSubGoal: 'Stress Management',
            data: {
                labels: ['Stress Management', 'Mindfulness', 'Hobbies'],
                datasets: [{
                    label: 'Mental Health',
                    data: [40, 30, 20],
                    backgroundColor: ['#4caf50', '#2196f3', '#ff5722'],
                }],
            },
        },
    });

    const playSound = (sound) => {
        const soundPath = sound === 'complete' ? 'complete.mp3' : 'success.mp3';
        const soundEffect = new Howl({ src: [soundPath] });
        soundEffect.play();
    };

    const handleGoalClick = (goal) => {
        setActiveGoal(goal);
    };

    const handleSubGoalClick = (subGoal) => {
        setGoalsData((prevData) => ({
            ...prevData,
            [activeGoal]: {
                ...prevData[activeGoal],
                selectedSubGoal: subGoal,
            },
        }));
    };

    useEffect(() => {
        const data = goalsData[activeGoal].data;
        const ctx = document.getElementById(`${activeGoal}-chart`);
        if (ctx) {
            const existingChart = Chart.getChart(ctx);
            if (existingChart) existingChart.destroy();
            new Chart(ctx, {
                type: 'doughnut',
                data: data,
                options: {
                    cutout: '70%',
                    plugins: {
                        legend: { display: true },
                    },
                },
            });
        }
    }, [activeGoal, goalsData]);

    return (
        <div className="health-goals">
            <h1>Health Goals</h1>
            <div className="goal-progress">
                {Object.keys(goalsData).map((goal) => (
                    <div
                        key={goal}
                        className={`progress-item ${goal === activeGoal ? 'active' : ''}`}
                        onClick={() => handleGoalClick(goal)}
                    >
                        <motion.div
                            className="progress-circle"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <svg className="progress-svg" viewBox="0 0 100 100">
                                <circle
                                    className="progress-circle-bg"
                                    cx="50"
                                    cy="50"
                                    r="45"
                                />
                                <circle
                                    className="progress-circle-fill"
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    strokeDasharray={`${goalsData[goal].progress}, 100`}
                                />
                            </svg>
                            <span className="progress-label">{goal}</span>
                        </motion.div>
                    </div>
                ))}
            </div>

            <div className="goal-details">
                <h2>{activeGoal}</h2>
                <div className="sub-goals">
                    {goalsData[activeGoal].subGoals.map((subGoal) => (
                        <div
                            key={subGoal}
                            className={`sub-goal ${subGoal === goalsData[activeGoal].selectedSubGoal ? 'active' : ''}`}
                            onClick={() => handleSubGoalClick(subGoal)}
                        >
                            {subGoal}
                        </div>
                    ))}
                </div>
                <canvas id={`${activeGoal}-chart`} className="chart"></canvas>
            </div>
        </div>
    );
};

export default HealthGoals;
