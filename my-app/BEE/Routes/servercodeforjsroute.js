const express = require('express');
const app = express();
const port = 3030;
const itemRouter = require('./Routes/jsroute'); // Import the router

// Middleware to parse JSON bodies
app.use(express.json());

// Use the router for '/api' base path (recommended for API routes)
app.use('/api', itemRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});