import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Chart from 'chart.js/auto';
import { Howl } from 'howler';
import './HealthGoals.scss';

const HealthGoals = () => {
    const [stepCount, setStepCount] = useState('');
    const [workoutChallenge, setWorkoutChallenge] = useState('');
    const [waterCompleted, setWaterCompleted] = useState(false);
    const [fruitCompleted, setFruitCompleted] = useState(false);

    const playSound = (sound) => {
        const soundPath = sound === 'complete' ? 'complete.mp3' : 'success.mp3';
        const soundEffect = new Howl({ src: [soundPath] });
        soundEffect.play();
    };

    const handleDailyChallengeCompletion = (challenge) => {
        if (challenge === 'water') {
            setWaterCompleted(true);
            playSound('complete');
        } else if (challenge === 'fruit') {
            setFruitCompleted(true);
            playSound('complete');
        }
    };

    const handleChallengeInput = (e) => {
        e.preventDefault();
        if (stepCount.trim() !== '') {
            playSound('success');
        }
        if (workoutChallenge.trim() !== '') {
            playSound('success');
        }
    };

    const createDonutChart = (ctx, data, options) => {
        return new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: options
        });
    };

    useEffect(() => {
        const createChart = (id, data, options) => {
            const ctx = document.getElementById(id);
            if (ctx) {
                const existingChart = Chart.getChart(ctx);
                if (existingChart) existingChart.destroy();
                createDonutChart(ctx, data, options);
            }
        };

        const data = {
            labels: ['Completed', 'Remaining'],
            datasets: [{
                data: [70, 30],
                backgroundColor: ['#4caf50', '#e0e0e0'],
            }]
        };

        const options = {
            cutout: '90%',
            plugins: {
                legend: { display: false }
            }
        };

        createChart('exercise-chart', data, options);
        createChart('cycling-chart', data, options);
        createChart('swimming-chart', data, options);
        createChart('nutrition-chart', data, options);

    }, []);

    const goals = [
        { id: 'exercise-chart', title: 'Exercise' },
        { id: 'cycling-chart', title: 'Cycling' },
        { id: 'swimming-chart', title: 'Swimming' },
        { id: 'nutrition-chart', title: 'Nutrition' },
    ];

    return (
        <div className='health-goals'>
            <h1>Health Goals</h1>
            <div className='goal'>
                <h2>Weight Management</h2>
                <div className='progress-container'>
                    <motion.div className='progress-bar' initial={{ width: 0 }} animate={{ width: '70%' }}></motion.div>
                    <span className='progress-text'>70%</span>
                </div>
            </div>

            {goals.map((goal) => (
                <div key={goal.id} className='goal'>
                    <h2>{goal.title}</h2>
                    <canvas id={goal.id}></canvas>
                </div>
            ))}

            <div className='goal'>
                <h2>Daily Water Intake</h2>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <input type='checkbox' id='water-intake' onChange={() => handleDailyChallengeCompletion('water')} checked={waterCompleted} />
                    <label htmlFor='water-intake'>Drink 8 glasses of water</label>
                </motion.div>
            </div>
            <div className='goal'>
                <h2>Daily Fruit Consumption</h2>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <input type='checkbox' id='fruit-consumption' onChange={() => handleDailyChallengeCompletion('fruit')} checked={fruitCompleted} />
                    <label htmlFor='fruit-consumption'>Eat a fruit</label>
                </motion.div>
            </div>
            <div className='goal'>
                <h2>Step Count</h2>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <input type='number' placeholder='Enter your step count' value={stepCount} onChange={(e) => setStepCount(e.target.value)} />
                </motion.div>
            </div>
            <div className='goal'>
                <h2>Workout Challenge</h2>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <input type='text' placeholder='Enter your workout challenge' value={workoutChallenge} onChange={(e) => setWorkoutChallenge(e.target.value)} />
                </motion.div>
            </div>
            <motion.button 
                onClick={handleChallengeInput}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Submit
            </motion.button>
        </div>
    );
}

export default HealthGoals;
