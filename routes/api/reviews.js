const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All paths start with '/api/users'

router.get('/:selectedArtist', reviewsCtrl.index)
router.post('/:selectedArtist/reviews', reviewsCtrl.create);
router.delete('/delete/:id', reviewsCtrl.delete)
router.put('/:id', reviewsCtrl.update)
module.exports = router;