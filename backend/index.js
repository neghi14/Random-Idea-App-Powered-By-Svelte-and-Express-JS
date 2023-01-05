const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

//MIDDLEWARE IMPORTS
const requestedAt = require('./middleware/requestedAt');

//MIDDLEWARE
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(requestedAt);

//ROUTES IMPORT
const ideaRoutes = require('./routes/ideaRoutes');

//ROUTES
app.use('/api/v1/ideas', ideaRoutes);

module.exports = app;
