// geminiController.js

const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

// Initialize the generative model
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Controller function for generating text from text-only input
exports.generateText = async (req, res) => {
    try {
        const { prompt } = req.body;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        res.json({ text });
    } catch (error) {
        console.error('Error generating text:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
};

// Controller function for generating text from text-and-image input (multimodal)
exports.generateTextAndImage = async (req, res) => {
    try {
        const { prompt, imageParts } = req.body;
        const result = await model.generateContent([prompt, ...imageParts]);
        const response = await result.response;
        const text = response.text();
        res.json({ text });
    } catch (error) {
        console.error('Error generating text from text and image:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
};
