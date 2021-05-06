const express = require('express');
const port = process.env.PORT || 5500;
const router = require('./router.js');
const connect = require('./db/index.js');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use('/', router);

app.listen(port, () => {
  console.log(`Server is listening of port ${port}`)
  
});