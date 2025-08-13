const express = require('express');
const app = express();
const port = 3030;

app.get('/', (req, res) => {
    res.send('Hello World!');  // Note: 'res' not 'resp'
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});