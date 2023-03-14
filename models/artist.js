const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: [{
        type: String,
}],
    }, {
    timeStamps: true,
})


const artistSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
    },
    cover:{
        type: String,
    },
    style:[{
        type: String,
}],
    shop: {
        type: String,
    },
    location:{
        type: String,
    },
    photo: {
        type: String,
    },
    portfolio: {
        type: String,
    },
    reviews: [reviewSchema],
})


module.exports = mongoose.model('Artist', artistSchema);