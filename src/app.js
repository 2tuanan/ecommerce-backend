const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression);
// Database connection
require('./dbs/init.mongodb.js');
// const { checkOverload } = require('./helpers/check.connect.js');
// checkOverload();
// Routes
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Welcome to the API'
    })
})
// Error handling

module.exports = app;