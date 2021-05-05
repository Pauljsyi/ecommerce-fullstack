const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const router = require('./router.js');
const connect = require('./db/index.js');
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(router)

app.listen(port, () => {
  console.log(`Server is listening of port ${port}`)
});