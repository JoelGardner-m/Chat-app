const express = require('express');

const app = express()

app.get('/', (res, req) => {
    res.send(`bob`)


})

app.post('./',(res, req) => {
    res.send(`bob`)


})



app.listen(5000);