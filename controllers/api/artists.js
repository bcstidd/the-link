const Artist = require('../../models/artist')

module.exports = {
  index,
  show
};

async function index(req, res) {
  try {
  let artists = await Artist.find({})
    res.json(artists)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

async function show(req, res) {
  const artist = await Artist.findById(req.params.selectedArtist)
  return res.json(artist)
}