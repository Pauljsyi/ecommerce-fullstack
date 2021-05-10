const helpers = require('../server/db/dbhelpers.js');

const controller = {
  getAll: (req, res) => {
    //get all request 
    console.log('controller: line 6')
    helpers.getAll(req.params)
      .then((result) => {
        console.log('controller: got results')
        res.send(result);
      })
      .catch((error) => {
        console.log("controller: rejected: ", error)
        res.send(error)
      })
  },
  getOne: (req, res) => {
    //get one request
  },
  post: (req, res) => {
    // for credit card information for cart?
    // adding guitar data to database for the first time

  }
}

module.exports = controller;