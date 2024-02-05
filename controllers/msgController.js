const Message = require('..models/message')

const msg_main = (req, res) => {
    Message.find().sort({ createdAt: 1 })
}