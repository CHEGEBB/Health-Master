// app.js

const express = require('express');
const bodyParser = require('body-parser');
const geminiRoutes = require('./routes/geminiRoutes');

// Initialize express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Use Gemini routes
app.use('/gemini', geminiRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
