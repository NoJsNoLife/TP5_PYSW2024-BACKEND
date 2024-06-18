const mongoose = require('mongoose')

const db = 'mongodb://127.0.0.1:27017/tp5backend'

mongoose.set('strictQuery', false)
mongoose.connect(db)
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err))

module.exports = mongoose