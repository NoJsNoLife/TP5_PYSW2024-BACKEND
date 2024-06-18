const express = require('express');
const cors = require('cors');
const mongoose = require('./configuration/database');

const app = express();

//middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Cargamos el modulo de direccionamiento de rutas
app.use('/api/producto', require('./routes/producto.routes.js'));
app.use('/api/espectador', require('./routes/espectador.routes.js'));
app.use('/api/ticket', require('./routes/ticket.routes.js'));
app.use('/api/transaccion', require('./routes/transaccion.routes.js'));

//Ruta por defecto en caso de ruta no encontrada
app.get("*", (req, res, next) => { 
    res.status(404).send("PAGE NOT FOUND"); 
  }); 

//setting
app.set('port', process.env.PORT || 3000);

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server started on port`, app.get('port'));
});