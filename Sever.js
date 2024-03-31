const express = require('express');

const app = express()

app.use(express.static('./public'))


app.get('/', (req, res) => {

})


app.post('/submit', (req, res) => {
  const name = req.body.name;
  res.send(`Hello, ${name}!`);
});

app.patch('/:id',(req, res) => {
    res.send(`<p>success</p>`)

})



app.listen(5000, console.log('active port on 5000'));