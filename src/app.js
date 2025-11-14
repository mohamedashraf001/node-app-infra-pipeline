const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());

// Root test
app.get('/', (req, res) => {
  res.json({ message: 'enzel ya medal3' });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// API routes
app.use('/api', routes);

module.exports = app;
