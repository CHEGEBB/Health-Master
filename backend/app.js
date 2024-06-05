const express = require('express');
const bodyParser = require('body-parser');
const geminiRoutes = require('./routes/geminiRoutes');
const cors = require('cors');

// Initialize express app
const app = express();
const backendPort = process.env.BACKEND_PORT || 3001; // Change the port as needed

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Add CORS middleware to allow cross-origin requests

// Use Gemini routes
app.use('/gemini', geminiRoutes);

// Start the server
app.listen(backendPort, () => {
    console.log(`Backend server is running on port ${backendPort}`);
});
