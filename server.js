'use strict';

const express = require('express');

const PORT = 8083;
const HOST = '0.0.0.0';

const app = express();
app.get('/employee', (req, res) => {
    
    res.send('Employee Onboaring');
});
app.get('/', (req, res) => {
res.send('<h2 style="color: purple"> Welcome to the NodeApp<h2>');
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
