const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = newSchema({
    user: [userSchema],
    content: String,
    rating: Number,
}, {
    timeStamps: true,
})

const artistSchema = newSchema({
    name: String,
    photo: String,
    style: [String],
    shop: String,  
    // reviews: [reviewSchema],
    portfolio: String,
})


module.exports = mongoose.model('Artist', artistSchema);