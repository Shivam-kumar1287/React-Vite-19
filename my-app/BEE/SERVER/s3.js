const express = require('express');
const app = express();
const port = 3030;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile('FILE.html', { root: __dirname })
});

app.post('/item', (req, res) => {  // Fixed this line
     res.json({x:23,t:3,R:4});
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