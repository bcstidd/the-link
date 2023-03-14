const Artist = require('../../models/artist')

module.exports = {
  index,
  show
};

async function index(req, res) {
  let artist = await Artist.find({})
  res.json(artist)
}

async function show(req, res) {
  const oneArtist = await Artist.findById(req.params.selectedArtist)
  return res.json(oneArtist)
}