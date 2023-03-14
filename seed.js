require('dotenv').config();

require('./config/database');

const Artist = require('./models/artist')

const data = require('./data')

const p1 = Artist.deleteMany({})
Promise.all([p1])
.then(function(result) {
    console.log(result)
    return Promise.all([
        Artist.create(data.artists)
    ])
})
.then(process.exit)