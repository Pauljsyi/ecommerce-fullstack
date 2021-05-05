const Guitars = require('./model.js');

const helpers = {
  getOne: () => {

  },
  getAll: (guitarlist) => {
    return Guitars.find(guitarlist)
  },
  post: () => {

  }
}

module.exports = helpers