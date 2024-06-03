import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import './HealthGoals.scss';
import strong from '../images/icons/docs/icon-park-twotone--muscle.svg';
import run from '../images/icons/docs/ic--sharp-directions-run.svg';
import sleep from '../images/icons/docs/mdi--sleep-schedule.svg';
import cycle from '../images/icons/docs/bx--cycling.svg';
import verticalDotsIcon from '../images/icons/docs/cil--options.svg'; 
import papayaImage from '../images/papaya.png';
import spinachImage from '../images/spinach.jfif';
import broccoliImage from '../images/brocolli.jfif';
import blueberryImage from '../images/blueberry.jfif';
import salmonImage from '../images/salmon.jfif';
import quinoaImage from '../images/quinoa.jfif';
import avocadoImage from '../images/avocado.jfif';
import greekyogurtImage from '../images/greekyyoghurt.jfif';

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
                                    <div className="progress-bar-fill">50%</div>
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
                <div className="nutritional-goals">
    <div className="food-item">
        <div className="food-image">
            <img src={papayaImage} alt="Papaya Fruit" />
        </div>
        <div className="food-info">
            <h2>Papaya Fruit for Vitamin C</h2>
            <p>
                Papaya is rich in vitamin C, which boosts immunity and aids digestion. It also contains papain, an enzyme that helps break down proteins.
            </p>
            <div className="expert-info">
                <p>Andrew Sceenshaver</p>
                <p>4-6 mins</p>
                <p>6 Ingredients</p>
                <p>568 Reviews</p>
            </div>
        </div>
    </div>

    <div className="food-item">
        <div className="food-image">
            <img src={spinachImage} alt="Spinach" />
        </div>
        <div className="food-info">
            <h2>Spinach for Iron</h2>
            <p>
                Spinach is packed with iron, essential for healthy red blood cells. It also contains vitamins A and K, folate, and antioxidants.
            </p>
            <div className="expert-info">
                <p>Sarah Smith</p>
                <p>3-5 mins</p>
                <p>5 Ingredients</p>
                <p>482 Reviews</p>
            </div>
        </div>
    </div>
    <div className="food-item">
                <div className="food-image">
                    <img src={broccoliImage} alt="Broccoli" />
                </div>
                <div className="food-info">
                    <h2>Broccoli for Fiber and Vitamin K</h2>
                    <p>
                        Broccoli is high in fiber, vitamin K, and antioxidants. It supports digestion, bone health, and may reduce the risk of chronic diseases.
                    </p>
                    <div className="expert-info">
                        <p>John Doe</p>
                        <p>4-5 mins</p>
                        <p>4 Ingredients</p>
                        <p>321 Reviews</p>
                    </div>
                </div>
            </div>

            {/* Food item 4 */}
            <div className="food-item">
                <div className="food-image">
                    <img src={blueberryImage} alt="Blueberries" />
                </div>
                <div className="food-info">
                    <h2>Blueberries for Antioxidants</h2>
                    <p>
                        Blueberries are rich in antioxidants, which help protect cells from damage and reduce inflammation. They also support brain health and may improve memory.
                    </p>
                    <div className="expert-info">
                        <p>Jane Doe</p>
                        <p>2-3 mins</p>
                        <p>3 Ingredients</p>
                        <p>456 Reviews</p>
                    </div>
                </div>
            </div>

            {/* Food item 5 */}
            <div className="food-item">
                <div className="food-image">
                    <img src={salmonImage} alt="Salmon" />
                </div>
                <div className="food-info">
                    <h2>Salmon for Omega-3 Fatty Acids</h2>
                    <p>
                        Salmon is a rich source of omega-3 fatty acids, which are beneficial for heart health, brain function, and reducing inflammation. It also provides high-quality protein and essential nutrients.
                    </p>
                    <div className="expert-info">
                        <p>Michael Johnson</p>
                        <p>5-7 mins</p>
                        <p>7 Ingredients</p>
                        <p>789 Reviews</p>
                    </div>
                </div>
            </div>

            {/* Food item 6 */}
            <div className="food-item">
                <div className="food-image">
                    <img src={quinoaImage} alt="Quinoa" />
                </div>
                <div className="food-info">
                    <h2>Quinoa for Protein and Fiber</h2>
                    <p>
                        Quinoa is a complete protein source and high in fiber, making it a nutritious grain alternative. It also contains vitamins, minerals, and antioxidants.
                    </p>
                    <div className="expert-info">
                        <p>Amy Smith</p>
                        <p>4-6 mins</p>
                        <p>5 Ingredients</p>
                        <p>654 Reviews</p>
                    </div>
                </div>
            </div>

            {/* Food item 7 */}
            <div className="food-item">
                <div className="food-image">
                    <img src={avocadoImage} alt="Avocado" />
                </div>
                <div className="food-info">
                    <h2>Avocado for Healthy Fats</h2>
                    <p>
                        Avocado is rich in healthy fats, including monounsaturated fats and omega-3 fatty acids. It also provides fiber, vitamins, and minerals, promoting heart health and satiety.
                    </p>
                    <div className="expert-info">
                        <p>Emily Johnson</p>
                        <p>3-4 mins</p>
                        <p>3 Ingredients</p>
                        <p>567 Reviews</p>
                    </div>
                </div>
            </div>

            {/* Food item 8 */}
            <div className="food-item">
                <div className="food-image">
                    <img src={greekyogurtImage} alt="Greek Yogurt" />
                </div>
                <div className="food-info">
                    <h2>Greek Yogurt for Probiotics and Protein</h2>
                    <p>
                        Greek yogurt is a good source of probiotics, which support gut health and immunity. It also provides high-quality protein, calcium, and vitamins.
                    </p>
                    <div className="expert-info">
                        <p>David Brown</p>
                        <p>2-3 mins</p>
                        <p>2 Ingredients</p>
                        <p>890 Reviews</p>
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
