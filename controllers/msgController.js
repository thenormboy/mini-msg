const Message = require('..models/message')

const msg_main = (req, res) => {
    Message.find().sort({ createdAt: 1 })
    .then((result) => {
        res.render('index', {title: "All Messages", msgs: result})
    })
    .catch((err) => {
        console.log(err)
    })
}

const msg_create_get = (req, res) => {
    res.render('create', {title: 'Create new message'})
}

const msg_create_post = (req, res) => {
    const msg = new Message(req.body)
    msg.save()
        .then(() => {
            res.redirect('/index')
        })
        .catch((err) => {
            console.log(err)
        })
}