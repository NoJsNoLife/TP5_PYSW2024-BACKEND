//defino controlador para el manejo de CRUD
const ticketCtrl = require('../controllers/ticket.controller.js');

//creamos el manejador de rutas
const { Router } = require('express');
const router = Router();

//definimos las rutas para la gestion de agente
router.get('/', ticketCtrl.getTickets);
router.post('/', ticketCtrl.createTicket);
router.get('/filter/:categoria', ticketCtrl.getTicketsByEspectador);
router.get('/id/:id', ticketCtrl.getTicket);
router.put('/:id', ticketCtrl.editTicket);
router.delete('/:id', ticketCtrl.deleteTicket);

//exportamos el modulo de rutas
module.exports = router;