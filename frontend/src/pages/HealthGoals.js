import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Chart from 'chart.js/auto';
import { Howl } from 'howler';
import './HealthGoals.scss';

const HealthGoals = () => {
    const [stepCount, setStepCount] = useState('');
    const [workoutChallenge, setWorkoutChallenge] = useState('');
    const [waterCompleted, setWaterCompleted] = useState(false);
    const [fruitCompleted, setFruitCompleted] = useState(false);

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

    const createDonutChart = (ctx) => {
        return new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: options
        });
    };

    const animateProgressBar = () => {
        const progressBar = document.querySelector('.progress-bar');
        progressBar.style.width = '70%'; // Update width to 70%
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
            // Handle successful step count input
        }
        if (workoutChallenge.trim() !== '') {
            playSound('success');
            // Handle successful workout challenge input
        }
    };

    const playSound = (sound) => {
        const soundPath = sound === 'complete' ? 'complete.mp3' : 'success.mp3';
        const soundEffect = new Howl({ src: [soundPath] });
        soundEffect.play();
    };

    React.useEffect(() => {
        animateProgressBar();
        const ctx = document.getElementById('donut-chart');
        if (ctx) {
            const existingChart = Chart.getChart(ctx);
            if (existingChart) existingChart.destroy();
            createDonutChart(ctx);
        }
    }, []);

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
            <div className='goal'>
                <h2>Exercise</h2>
                <canvas id='donut-chart'></canvas>
            </div>
            <div className='goal'>
                <h2>Daily Water Intake</h2>
                <input type='checkbox' id='water-intake' onChange={() => handleDailyChallengeCompletion('water')} checked={waterCompleted} />
                <label htmlFor='water-intake'>Drink 8 glasses of water</label>
            </div>
            <div className='goal'>
                <h2>Daily Fruit Consumption</h2>
                <input type='checkbox' id='fruit-consumption' onChange={() => handleDailyChallengeCompletion('fruit')} checked={fruitCompleted} />
                <label htmlFor='fruit-consumption'>Eat a fruit</label>
            </div>
            <div className='goal'>
                <h2>Step Count</h2>
                <input type='number' placeholder='Enter your step count' value={stepCount} onChange={(e) => setStepCount(e.target.value)} />
            </div>
            <div className='goal'>
                <h2>Workout Challenge</h2>
                <input type='text' placeholder='Enter your workout challenge' value={workoutChallenge} onChange={(e) => setWorkoutChallenge(e.target.value)} />
            </div>
            <button onClick={handleChallengeInput}>Submit</button>
        </div>
    );
}

export default HealthGoals;
