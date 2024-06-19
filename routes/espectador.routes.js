//defino controlador para el manejo de CRUD
const espectadorCtrl = require('../controllers/espectador.controller.js');

//creamos el manejador de rutas
const { Router } = require('express');
const router = Router();

//definimos las rutas para la gestion de agente
router.get('/', espectadorCtrl.getEspectadores);
router.post('/', espectadorCtrl.createEspectador);
router.get('/id/:id', espectadorCtrl.getEspectador);
router.get('/:dni', espectadorCtrl.getEspectadorByDni);
/*router.put('/:id', productoCtrl.editProducto);
router.delete('/:id', productoCtrl.deleteProducto);*/

//exportamos el modulo de rutas
module.exports = router;