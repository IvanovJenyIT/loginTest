"use strict";
const express = require('express');
const app = express();

const port = process.env.PORT || 5000
app.get('/', (req, res) => {
    let helloMess = 'Hello World!';
    res.send(helloMess);
});
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
