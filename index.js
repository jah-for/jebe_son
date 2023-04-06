const express = require('express');
const mongoose = require('mongoose');

// Import routes
const consultantRoutes = require('./routes/consultantRoutes');
const loggerRoutes = require('./routes/loggerRoutes');
const sawmillRoutes = require('./routes/sawmillRoutes');
const treeRoutes = require('./routes/treeRoutes');
const userRoutes = require('./routes/userRoutes');

// Set up the express app
const app = express();

// Connect to the database
mongoose.connect('mongodb://localhost:27017/forestpro', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch((error) => console.log(error));

// Parse incoming requests with JSON payloads
app.use(express.json());

// Use routes
app.use('/consultants', consultantRoutes);
app.use('/loggers', loggerRoutes);
app.use('/sawmills', sawmillRoutes);
app.use('/trees', treeRoutes);
app.use('/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
