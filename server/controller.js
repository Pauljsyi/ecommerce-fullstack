const helpers = require('../server/db/dbhelpers.js');

const controller = {
  getAll: (req, res) => {
    //get all request 
    // helpers.getAll(req)
    //   .then((result) => {
    //     console.log('get all results: ', results)
    //     res.send(result);
    //   })
    //   .catch((error) => {
    //     console.log("controller error:", error)
    //     res.send(error)
    //   })
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