const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    catg: {
        required: false,
        type: String
    }
})

module.exports = mongoose.model('shopping_categs', dataSchema)
