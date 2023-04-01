const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const treeRoutes = require('./routes/treeRoutes');
const userRoutes = require('./routes/userRoutes');
const consultantRoutes = require('./routes/consultantRoutes');
const loggerRoutes = require('./routes/loggerRoutes');
const sawmillRoutes = require('./routes/sawmillRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/trees', treeRoutes);
app.use('/users', userRoutes);
app.use('/consultants', consultantRoutes);
app.use('/loggers', loggerRoutes);
app.use('/sawmills', sawmillRoutes);

app.get('/', (req, res) => {
  res.send('Hello, ForestPro Backend!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
