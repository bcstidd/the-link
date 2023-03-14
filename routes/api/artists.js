const express = require('express');
const router = express.Router();
const artistsCtrl = require('../../controllers/api/artists');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/index', artistsCtrl.index);
router.get(`/:selectedArtist`, artistsCtrl.show)

module.exports = router;