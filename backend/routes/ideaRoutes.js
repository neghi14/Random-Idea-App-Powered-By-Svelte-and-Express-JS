const express = require('express');

const router = express.Router();

const {
  getIdeas,
  createIdeas,
  updateIdeas,
  deleteIdeas,
} = require('../controller/ideaController');

router.route('/').get(getIdeas).post(createIdeas);
router.route('/:id').patch(updateIdeas).delete(deleteIdeas);

module.exports = router;
