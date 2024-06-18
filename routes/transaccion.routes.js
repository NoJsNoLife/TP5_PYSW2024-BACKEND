//defino controlador para el manejo de CRUD
const transaccionCtrl = require('../controllers/transaccion.controller.js');

//creamos el manejador de rutas
const { Router } = require('express');
const router = Router();

//definimos las rutas para la gestion de agente
router.get('/', transaccionCtrl.getTransacciones);
router.post('/', transaccionCtrl.createTransaccion);
router.get('/filter/', transaccionCtrl.getTransaccionesByMonedas);
router.get('/:email', transaccionCtrl.getTransaccionesByEmail);


//exportamos el modulo de rutas
module.exports = router;