import React, { useState } from 'react';
import './SymptomChecker.scss'; // Import your CSS file for styling

const SymptomChecker = () => {
  const [userInput, setUserInput] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      // Fetch from backend API here and update diagnosis state
      const response = await fetch('/api/diagnosis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symptoms: userInput }),
      });
      const data = await response.json();
      setDiagnosis(data.diagnosis);
    } catch (error) {
      console.error('Error fetching response:', error);
      setError('Error fetching response. Please try again later.');
    }
  };

  return (
    <div className="symptom-checker">
      <h1>Symptom Checker</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Describe your symptoms:
          <textarea value={userInput} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error && <p className="error">{error}</p>}
      {diagnosis && (
        <div className="diagnosis">
          <h2>Diagnosis</h2>
          <p>{diagnosis}</p>
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;
