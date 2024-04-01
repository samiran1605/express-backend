require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api', (req, res) => {
    res.send('Hello samiran')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login</h1>')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})