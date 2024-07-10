const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());



app.get('/sahil', (req, res) => {
    res.send("CR7");
})

app.post('/', (req, res) => {
    res.send("Cristiano Ronaldo");
})

app.listen(port, () => {
    console.log(`app is listening on ${port}`)
})