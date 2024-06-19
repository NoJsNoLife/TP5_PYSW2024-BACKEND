const mongoose = require('mongoose')
const { Schema } = require('mongoose')
const Espectador = require('./espectador')

const TicketSchema = new Schema({
    precioTicket: {type:Number, required: true},
    categoriaEspectador: {type:String, required: true},
    fechaCompra: {type:String, required: true},
    espectador: {
        type: Schema.Types.ObjectId,
        ref: Espectador,
        required: false
    }

})

module.exports = mongoose.models.TicketSchema || mongoose.model('ticketSchema', TicketSchema)