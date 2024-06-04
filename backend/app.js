const express = require('express');
const app = express();
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Middleware for parsing JSON bodies
app.use(express.json());

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Routes setup
const routes = require('./routes');
app.use('/', routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
