const Artist = require('../../models/artist')

module.exports = {
    index,
    create,
}

async function index(req, res) {
    try {
      const artist = await Artist.findOne({});
      res.json(artist);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }

async function create(req, res){
    const artistReviews = await Artist.findById(req.params.selectedArtist)
    artistReviews.reviews.push(req.body)
    await artistReviews.save()
    res.json(artistReviews)
}