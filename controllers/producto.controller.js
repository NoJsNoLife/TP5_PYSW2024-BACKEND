const Producto = require('../models/producto');
const productoCtrl = {}

productoCtrl.getProductos = async (req, res) => {
    let productos = await Producto.find();
    res.json(productos);
}

productoCtrl.getProductoDestacados = async (req, res) => {
    try {
        const producto = await Producto.find({"destacado": true});
        res.json(producto);
    } catch (error) {
        res.status(404).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
    
}

productoCtrl.createProducto = async (req, res) => {
    let producto = new Producto(req.body);
    try {
        await producto.save();
        res.status(201).json({
        'status': '1',
        'msg': 'Producto guardado.'})
    } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando operacion.'})
    }
}

productoCtrl.getProducto = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        res.json(producto);
    } catch (error) {
        res.status(404).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
    
}



productoCtrl.editProducto = async (req, res) => {
    try {
        await Producto.updateOne({_id: req.params.id}, { $set: req.body});
        res.status(200).json({
            'status': '1',
            'msg': 'Producto updated'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

productoCtrl.deleteProducto = async (req, res)=>{
    try {
        await Producto.findByIdAndDelete({_id: req.params.id});
        res.status(200).json({
            status: '1',
            msg: 'Producto removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = productoCtrl;