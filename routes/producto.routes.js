//defino controlador para el manejo de CRUD
const productoCtrl = require('../controllers/producto.controller.js');

//creamos el manejador de rutas
const { Router } = require('express');
const router = Router();

//definimos las rutas para la gestion de agente
router.get('/', productoCtrl.getProductos);
router.get('/destacados', productoCtrl.getProductoDestacados);
router.post('/', productoCtrl.createProducto);
router.get('/:id', productoCtrl.getProducto);
router.put('/:id', productoCtrl.editProducto);
router.delete('/:id', productoCtrl.deleteProducto);

//exportamos el modulo de rutas
module.exports = router;