const Artist = require('../../models/artist')

module.exports = {
    create,
}

async function create(req, res) {
    const newReview = await Artist.findById(req.params.selectedArtist)
    if (newReview && newReview.user.equals(req.user._id)) {
        newReview.content.push(req.body)
        await newReview.save()
        res.json(newReview)
    }
    else {
        console.log('no review')
    }
}