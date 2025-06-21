
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/main.html'));
});
//your code here
app.post('/add', (req, res) => {
  const {a,b} = req.body;
  res.status(200).send(a+b);
  
});
module.exports = app;