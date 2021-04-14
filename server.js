//IMPORTACIONES USADAS
const express = require('express'); //EL EXPRESS
const mongoose = require('mongoose'); //EXTENSION DE MONGODB
const postRoutes = require('./routes/customers'); //LAS RUTAS USADAS
const bodyParser = require('body-parser'); //EL CUERPO

const app = express();

app.use(bodyParser.json());

//USO DE LAS RUTAS
app.use('/web/customers', postRoutes);

//CONEXION A MONGO
mongoose.connect(
    "mongodb://localhost/usuarios", { useNewUrlParser: true },
    (err, res) => {
        err && console.log('Error conectando a la base de datos');
        app.listen(4000, () => {
            console.log('Servidor corriendo en el puerto 4000')
        })
    }
)