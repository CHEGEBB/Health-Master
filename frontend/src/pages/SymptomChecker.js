import React, { useState } from 'react';
import LlamaAI from 'llamaai';
import './SymptomChecker.scss';

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [error, setError] = useState(null);

  const apiToken = 'LL-mPkriaJz5jFRSimVvBwy3dtMAm72ZuyGRALInv1TMLC9znZ6wdgBbkwDtsdlstR1'; // Replace with your actual API token
  const symptomCheckerAPI = new LlamaAI(apiToken);

  const handleInputChange = (event) => {
    setSymptoms(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    const apiRequestJson = {
      "messages": [
        { "role": "user", "content": symptoms },
      ],
      "functions": [
        {
          "name": "get_diagnosis",
          "description": "Get diagnosis based on symptoms",
          "parameters": {
            "type": "object",
            "properties": {
              "symptoms": {
                "type": "string",
                "description": "Symptoms entered by the user"
              }
            },
            "required": ["symptoms"]
          }
        }
      ]
    };

    try {
      const apiResponse = await symptomCheckerAPI.run(apiRequestJson);
      const { data } = apiResponse;
      setDiagnosis(data);
      console.log('Diagnosis:', data);
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
          Enter Symptoms:
          <input type="text" value={symptoms} onChange={handleInputChange} />
        </label>
        <button type="submit">Diagnose</button>
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
