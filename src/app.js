const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

// Initialize middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// Initialize database connection

// Initialize routes
app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce Backend API');
});
// Handle errors

module.exports = app;