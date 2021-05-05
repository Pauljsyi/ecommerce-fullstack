const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/')
    .get(controller.getAll)
    .post()
router
  .route('/:_id')
    .get()
    .post()

module.exports = router;