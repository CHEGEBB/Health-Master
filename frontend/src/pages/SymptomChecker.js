import React, { useState } from 'react';
import axios from 'axios';
import './SymptomChecker.scss';

const SymptomChecker = () => {
    const [symptoms, setSymptoms] = useState('');
    const [result, setResult] = useState('');
    const [consent, setConsent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!consent) {
            setResult('You must consent to provide your symptoms for analysis.');
            return;
        }
        setLoading(true);
        setResult('');
        try {
            const response = await axios.post('https://api.gemini.ai/v1/symptom-check', {
                symptoms: symptoms,
                apiKey: process.env.REACT_APP_GEMINI_API_KEY
            });
            setResult(response.data.diagnosis);
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error('Server Error:', error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No Response:', error.request);
            } else {
                // Something happened in setting up the request that triggered an error
                console.error('Error:', error.message);
            }
            setResult('Error fetching diagnosis. Please try again.');
        } finally {
            setLoading(false);
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
                <button type="submit" disabled={loading}>
                    {loading ? 'Checking...' : 'Check Symptoms'}
                </button>
            </form>
            {result && <div className="result">{result}</div>}
        </div>
    );
};

export default SymptomChecker;
