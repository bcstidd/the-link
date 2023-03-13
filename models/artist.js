const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: String,
    }, {
    timeStamps: true,
})

const artistSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: String,
    cover: String,
    style: {
        type: [String],
        enum: ['American Traditional', 'Fine Line', 'Black & Gray', 'Micro', 'Geometric', 'Tribal', 'Portraits', 'Japanese', 'Watercolor', 'Neo-Traditional', 'Realism', 'Trash Polka', 'Aesthetic'],
    },
    shop: String,  
    location: String,
    photo: String,
    portfolio: String,
    reviews: [reviewSchema],

})


module.exports = mongoose.model('Artist', artistSchema);