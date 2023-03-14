const Artist = require('../../models/artist')

module.exports = {
    index,
    create,
    delete: deleteReview,
    update
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
    res.json(artistReviews.reviews[artistReviews.reviews.length-1])
}

async function deleteReview(req, res) {
  const artist = await Artist.findOne({'reviews._id':req.params.id})
  artist.reviews.remove(req.params.id)
  artist.save()
  return res.json(artist)
}

async function update(req, res) {
  const artist = await Artist.findOne({'reviews._id':req.params.id})
  const review = artist.reviews.id(req.params.id)
  console.log(review, req.body)
  review.content = req.body.content
  artist.save()
  return res.json(artist)
}