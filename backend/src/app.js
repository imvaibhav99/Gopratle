const express = require('express');
const cors = require('cors');
const requirementRoutes = require('./routes/requirement.routes');
const errorHandler = require('./middlewares/error.middleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/requirements', requirementRoutes);

// Health Check
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use(errorHandler);

module.exports = app;
