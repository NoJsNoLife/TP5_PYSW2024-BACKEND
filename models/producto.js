const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const ProductoSchema = new Schema({
    nombre: {type:String, required: true},
    descripcion: {type:String, required: true},
    imagen: {type:String, required: true},
    precio: {type:Number, required: true},
    stock: {type:Number, required: true},
    destacado: {type:Boolean, required: false}
})

module.exports = mongoose.models.ProductoSchema || mongoose.model('productoSchema', ProductoSchema)