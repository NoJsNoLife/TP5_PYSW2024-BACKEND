const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const TransaccionSchema = new Schema({
    monedaOrigen: {type:String, required: true},
    cantidadOrigen: {type:Number, required: true},
    monedaDestino: {type:String, required: true},
    cantidadDestino: {type:Number, required: true},
    email: {type:String, required: true}
})

module.exports = mongoose.models.TransaccionSchema || mongoose.model('transaccionSchema', TransaccionSchema)