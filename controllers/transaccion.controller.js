const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}

transaccionCtrl.getTransacciones = async (req, res) => {
    try {
        let transacciones = await Transaccion.find();
        res.json(transacciones);
    } catch (error) {
        res.status(500).json({
            'status': '0',
            'msg': 'Error al recuperar las transacciones.',
            "error": error.message
        });
    }
}

transaccionCtrl.getTransaccionesByEmail = async (req, res) => {
    try {
        let transacciones = await Transaccion.find({"emailCliente": req.params.email});
        res.json(transacciones);
    } catch (error) {
        res.status(500).json({
            'status': '0',
            'msg': 'Error al recuperar las transacciones.',
        });
    }
}

transaccionCtrl.getTransaccionesByMonedas = async (req, res) => {
    try {
        let transacciones = await Transaccion.find({"monedaOrigen": req.query.from, "monedaDestino": req.query.to});
        res.json(transacciones);
    } catch (error) {
        res.status(500).json({
            'status': '0',
            'msg': 'Error al recuperar las transacciones.',
        });
    }
}

transaccionCtrl.createTransaccion = async (req, res) => {
    try {
        let transaccion = new Transaccion(req.body);
        await transaccion.save();
        res.status(201).json({
        'status': '1',
        'msg': 'Transaccion guardada.'})
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al registrar la transacciones.',
            "error": error.message
        })
    }
}

//TODO: Falta implementar. No es solicitado en el tp.
/*transaccionCtrl.getTransaccion = async (req, res) => {
    try {
        const ticket = await Transaccion.findById(req.params.id);
        res.json(ticket);
    } catch (error) {
        res.status(404).json({
            'status': '0',
            'msg': 'Error procesando la operacion',
        })
    }
}*/


/*transaccionCtrl.editTransaccion = async (req, res) => {
    try {
        if(req.body.dni) {
            const espectador = await Espectador.findOne({"dni": req.body.dni});
            req.body.espectador = espectador;
        } else {
            await Transaccion.updateOne({_id: req.params.id}, { $set: req.body});
        }
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
}*/

/*transaccionCtrl.deleteTransaccion = async (req, res)=>{
    try {
        await Transaccion.findByIdAndDelete({_id: req.params.id});
        res.status(200).json({
            status: '1',
            msg: 'Ticket removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}*/
module.exports = transaccionCtrl;