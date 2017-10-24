const express = require('express');
const path = require('path');
const PORT = 5000;
const bodyParser = require('body-parser');

let app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/vue/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/vue.html'));
})

app.get('/angular/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/angular.html'));
})

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/vue.html'));
})

app.listen(PORT, () => {
  console.log('Connected on Dev');
  console.log(`URL: http://localhost:${PORT}`)
})
