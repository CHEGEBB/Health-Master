import React from 'react';
import { motion } from 'framer-motion';
import Chart from 'chart.js/auto';
import './HealthGoals.scss';

const HealthGoals = () => {
    // Sample data for the donut chart
    const data = {
        labels: ['Completed', 'Remaining'],
        datasets: [{
            data: [70, 30],
            backgroundColor: ['#4caf50', '#e0e0e0'],
        }]
    };

    // Configuring options for the donut chart
    const options = {
        cutout: '90%',
        plugins: {
            legend: { display: false }
        }
    };

    // Function to create donut chart
    const createDonutChart = (ctx) => {
        return new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: options
        });
    };

    // Function to animate progress bar
    const animateProgressBar = () => {
        const progressBar = document.querySelector('.progress-bar');
        progressBar.style.width = '70%'; // Update width to 70%
    };

    // Trigger animation on component mount
    React.useEffect(() => {
        animateProgressBar();
        const ctx = document.getElementById('donut-chart');
        createDonutChart(ctx);
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
            {/* Add more goals here */}
        </div>
    );
}

export default HealthGoals;
