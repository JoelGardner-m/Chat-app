const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send(`bob`)


})

app.post('/',(req, res) => {
    res.send(`bob`)


})



app.listen(5000);