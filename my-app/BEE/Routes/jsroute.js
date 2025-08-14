const express = require('express');
const router = express.Router();

// GET - Serve HTML file (make sure FILE.html exists in the same directory)
router.get('/', (req, res) => {
    res.sendFile('FILE.html', { root: __dirname });
});

// POST - Return JSON data
router.post('/item', (req, res) => {
    res.json({ x: 23, t: 3, R: 4 });
});

// PUT - Handle updates with ID parameter
router.put('/item/:id', (req, res) => {
    res.send(`Updated item with ID: ${req.params.id}`);
});

// DELETE - Handle item deletion
router.delete('/item', (req, res) => {
    res.send('Item deleted successfully');
});

module.exports = router;