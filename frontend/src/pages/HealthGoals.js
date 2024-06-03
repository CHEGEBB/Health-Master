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

    const handleDailyChallengeCompletion = (goal, setGoal) => {
        setGoal(true);
        playSound('complete');
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

        createChart('weight-chart', data, options);
        createChart('exercise-chart', data, options);
        createChart('cycling-chart', data, options);
        createChart('swimming-chart', data, options);
        createChart('nutrition-chart', data, options);

    }, []);

    const goals = [
        { id: 'weight-chart', title: 'Weight Management', subGoals: ['Drink a smoothie', 'Workout', 'Track calories', 'Weigh yourself', 'Eat healthy snacks'] },
        { id: 'exercise-chart', title: 'Exercise', subGoals: ['Morning jog', 'Evening yoga', 'Strength training', 'Cycling', 'Swimming'] },
        { id: 'cycling-chart', title: 'Cycling', subGoals: ['Ride 5 miles', 'Ride 10 miles', 'Ride 20 miles', 'Hill climbs', 'Track speed'] },
        { id: 'swimming-chart', title: 'Swimming', subGoals: ['Swim 10 laps', 'Swim 20 laps', 'Swim 30 laps', 'Butterfly stroke', 'Freestyle stroke'] },
        { id: 'nutrition-chart', title: 'Nutrition', subGoals: ['Eat a fruit', 'Drink 8 glasses of water', 'Avoid junk food', 'Eat vegetables', 'Take vitamins'] },
    ];

    return (
        <div className='health-goals'>
            <h1>Health Goals</h1>

            {goals.map((goal) => (
                <div key={goal.id} className='goal'>
                    <h2>{goal.title}</h2>
                    <div className='details'>
                        {goal.subGoals.map((subGoal, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <input type='checkbox' id={`${goal.id}-${index}`} onChange={() => handleDailyChallengeCompletion(subGoal)} />
                                <label htmlFor={`${goal.id}-${index}`}>{subGoal}</label>
                            </motion.div>
                        ))}
                    </div>
                    <div className='visuals'>
                        <canvas id={goal.id}></canvas>
                    </div>
                </div>
            ))}

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
