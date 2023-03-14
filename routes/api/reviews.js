const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All paths start with '/api/users'

router.post('/artist/:selectedArtist/reviews', reviewsCtrl.create);

module.exports = router;