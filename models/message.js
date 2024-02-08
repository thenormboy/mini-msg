const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    added: {
        type: Object,
        required: true,
    },
}, { timestamps: true })

const Message = mongoose.model('Message', messageSchema)

module.exports = Message