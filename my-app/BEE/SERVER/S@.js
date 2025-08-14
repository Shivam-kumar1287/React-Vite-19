const express = require('express');
const app = express();
const port = 3030;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/item', (req, res) => {  // Fixed this line
    res.send('Hello World! post');
});

app.put('/item/:id', (req, res) => {  // Fixed this line
    res.send(`Hello World! put - ID: ${req.params.id}`);
});

app.delete('/item', (req, res) => {  // Fixed this line
    res.send('Hello World! delete');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});