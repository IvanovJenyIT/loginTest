"use strict";
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    let helloMess = 'Hello Worlddd!';
    res.send(helloMess);
});
app.listen(4000, () => {
    console.log('Server listening on port 4rr000');
});
