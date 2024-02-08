const express = require('express')
const mongoose = require('mongoose')

const msgRoutes = require('./routes/msgRoutes')

const dbURI = 'mongodb://mongo:dgBDFACFhabDDf-G6gGbHf-E4c3EHg6B@mongodb.railway.internal:27017'
mongoose.connect(dbURI)
    .then((result) => {
        console.log('connected to db')
        app.listen(3000)
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