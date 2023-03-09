const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = newSchema({
    user: [userSchema],
    content: String,
    }, {
    timeStamps: true,
})

const artistSchema = newSchema({
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