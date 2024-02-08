const express = require('express')
const mongoose = require('mongoose')

const msgRoutes = require('./routes/msgRoutes')

const port = process.env.PORT || 3000;

const dbURI = 'mongodb+srv://test-user:testpass@cluster0.xw14m68.mongodb.net/mini-message?retryWrites=true&w=majority'
mongoose.connect(dbURI)
    .then((result) => {
        console.log('connected to db')
        app.listen(port, "0.0.0.0")
    })
    .catch((err) => console.log(err))

const app = express()
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended:true }))

app.get('/', (req, res) => {
  res.redirect('/messages')
})

app.use('/messages', msgRoutes)

app.use((req, res) => {
    res.status(404).render('404.ejs', { title: '404'})
})