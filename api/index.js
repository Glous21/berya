// api/index.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
require('dotenv').config();

const serviceRoutes = require('../routes/serviceRoutes');
const benefitRoutes = require('../routes/benefitRoutes');
const testimonialRoutes = require('../routes/testimonialRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/services', serviceRoutes);
app.use('/api/benefits', benefitRoutes);
app.use('/api/testimonials', testimonialRoutes);

app.get('/', (req, res) => res.send('API is running...'));

// Export handler for Vercel
module.exports.handler = serverless(app);
