const express = require('express');
const app = express();
const port = 3030;

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));
// Middleware for parsing JSON bodies
app.use(express.json());

// GET request handler
app.get('/register', (req, res) => {
    // let { user, pass } = req.query;  // GET request data comes from query params
    // if (!user || !pass) {
    //     res.send('Please Enter valid credentials');
    // } else {
    //     res.send(`User ${user} Registered Successfully via GET`);
    // }
    console.log("get request handler called")
    console.log('req.query', req.query);
});

// POST request handler
app.post('/register', (req, res) => {
    // let { user, pass } = req.body;  // POST request data comes from body
    // if (!user || !pass) {
    //     res.send('Please Enter valid credentials');
    // } else {
    //     res.send(`User ${user} Registered Successfully via POST`);
    // }
    console.log("post request handler called")
    console,log('req.body', req.body);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
