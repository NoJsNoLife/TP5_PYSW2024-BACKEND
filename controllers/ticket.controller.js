const Ticket = require('../models/ticket');
const Espectador = require('../models/espectador');
const ticketCtrl = {}

ticketCtrl.getTickets = async (req, res) => {
    try {
        let tickets = await Ticket.find().populate('espectador');
        res.json(tickets);
    } catch (error) {
        res.status(500).json({
            'status': '0',
            'msg': 'Error al recuperar los tickets.',
        });
    }
}

ticketCtrl.getTicketsByEspectador = async (req, res) => {
    try {
        let tickets = await Ticket.find({"categoriaEspectador": req.query.categoria}).populate('espectador');
        res.json(tickets);
    } catch (error) {
        res.status(500).json({
            'status': '0',
            'msg': 'Error al recuperar los tickets.',
            'error': error.message
        });
    }
}

ticketCtrl.createTicket = async (req, res) => {
    try {
        const espectador = await Espectador.findOne({"dni": req.body.dni});
        let ticket = new Ticket(req.body);
        ticket.espectador = espectador;
        await ticket.save();
        res.status(201).json({
        'status': '1',
        'msg': 'Ticket guardado.'})
    } catch (error) {
        res.status(400).json(error.message)
    }
}

ticketCtrl.getTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        res.json(ticket);
    } catch (error) {
        res.status(404).json({
            'status': '0',
            'msg': 'Error procesando la operacion',
        })
    }
}

ticketCtrl.editTicket = async (req, res) => {
    try {
        await Ticket.updateOne({_id: req.params.id}, { $set: req.body});
        res.status(200).json({
            'status': '1',
            'msg': 'Ticket updated'
        })
        
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

ticketCtrl.deleteTicket = async (req, res)=>{
    try {
        await Ticket.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: '1',
            msg: 'Ticket removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion',
            'error': error.message
        })
    }
}
module.exports = ticketCtrl;