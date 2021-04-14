const mongoose = require('mongoose');
const Schema = mongoose.Schema; //ESQUEMA O TABLA DEL USUARIO(EN ESTE CASO).

//CONSTRUCCION DEL ESQUEMA
const CustomerSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String },
    phoneNumber: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: String },
    country: { type: String },
});

//EXPORTA EL ESQUEMA CREADO
module.exports = Customer = mongoose.model('Customer', CustomerSchema);