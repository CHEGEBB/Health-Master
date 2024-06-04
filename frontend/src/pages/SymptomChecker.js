import React, { useState } from 'react';
import axios from 'axios';
import './SymptomChecker.scss';

const SymptomChecker = () => {
    const [symptoms, setSymptoms] = useState('');
    const [result, setResult] = useState('');
    const [consent, setConsent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://api.gemini.ai/v1/symptom-check', {
                symptoms: symptoms,
                apiKey: process.env.REACT_APP_GEMINI_API_KEY
            });
            setResult(response.data.diagnosis);
        } catch (error) {
            console.error('Error checking symptoms', error);
            setResult('Error fetching diagnosis. Please try again.');
        }
    };

    const handleConsentChange = () => {
        setConsent(!consent);
    };

    return (
        <div className="symptom-checker">
            <h1>Symptom Checker</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    placeholder="Describe your symptoms here"
                ></textarea>
                <label>
                    <input
                        type="checkbox"
                        checked={consent}
                        onChange={handleConsentChange}
                    />
                    I consent to providing my symptoms for analysis
                </label>
                <button type="submit">Check Symptoms</button>
            </form>
            {result && <div className="result">{result}</div>}
        </div>
    );
};

export default SymptomChecker;
