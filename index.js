const express = require('express')
const app = express()
const bicycles = require('./data/data.json')

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    return res.render('bicycles')
})
app.get('/bicycle', (req, res) => {
    return res.render('overview')
})

app.listen(4000, () => console.log('Running!'))