import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import './SymptomChecker.scss'; // Assuming you have a stylesheet

function SymptomChecker() {
  const [symptoms, setSymptoms] = useState(''); // State for user-entered symptoms
  const [response, setResponse] = useState(''); // State for the generated response
  const [isLoading, setIsLoading] = useState(false); // State to indicate loading
  const [error, setError] = useState(null); // State for error handling

  const handleInputChange = (event) => {
    setSymptoms(event.target.value);
  };

  const generateResponse = async () => {
    setIsLoading(true);
    setResponse(''); // Clear previous response
    setError(null); // Clear previous error

    try {
      const API_KEY = ''; // Replace with your actual API key
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // Craft prompt for potential condition based on symptoms
      const prompt = `Based on your symptoms (${symptoms}), it's advisable to seek medical attention now.`;

      const result = await model.generateContent(prompt);
      const generatedResponse = await result.response.text();

      // Set response
      setResponse(generatedResponse);
    } catch (error) {
      console.error("Error generating text:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="symptom-checker">
      <h1>Symptom Checker</h1>
      <div>
        <label htmlFor="symptoms">Enter your symptoms:</label>
        <input
          type="text"
          id="symptoms"
          name="symptoms"
          value={symptoms}
          onChange={handleInputChange}
        />
        <button onClick={generateResponse} disabled={isLoading}>
          {isLoading ? 'Generating Response...' : 'Generate Response'}
        </button>
      </div>
      {error && <div className="error">{error}</div>}
      <div id="output">
        {response}
      </div>
    </div>
  );
}

export default SymptomChecker;
