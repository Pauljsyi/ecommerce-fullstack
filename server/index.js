const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const router = require('./router.js');
const connect = require('./db/index.js');

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.use(router)

app.listen(port, () => {
  console.log(`Server is listening of port ${port}`)
});