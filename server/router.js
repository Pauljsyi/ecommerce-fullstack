const router = require('express').Router();
const controller = require('./controller.js');


router
  .route('/guitars')
    .get(controller.getAll)
router
  .route('/guitars/:_id')
    .get()
    .post()

module.exports = router;