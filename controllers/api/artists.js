const Artist = require('../../models/artist')

module.exports = {
  index,
  show
};

async function index(req, res) {
  try {
  let artist = await Artist.find({})
    res.json(artist)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

async function show(req, res) {
  const oneArtist = await Artist.findById(req.params.selectedArtist)
  return res.json(oneArtist)
}