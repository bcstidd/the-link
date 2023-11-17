const Artist = require('../../models/artist')
const mongoose = require ('mongoose')
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
  const artistId = req.params.selectedArtist;

  // Check if the provided ID is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(artistId)) {
    return res.status(400).json({ error: 'Invalid artist ID' });
  }

  try {
    const artist = await Artist.findById(artistId);
    
    if (!artist) {
      return res.status(404).json({ error: 'Artist not found' });
    }

    return res.json(artist);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
}