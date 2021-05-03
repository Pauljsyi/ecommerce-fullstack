const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/')
    .get()
    .post()
router
  .route('/:id')
    .get()
    .post()

module.exports = router;