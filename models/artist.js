const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = newSchema({
    content: String,
    rating: Number,
}, {
    timeStamps: true,
})

const artistSchema = newSchema({
    name: String,
    style: [String],
    shop: [string],
    yearsOfExp: Number,
    reviews: [reviewSchema]
})


module.exports = mongoose.model('User', userSchema);