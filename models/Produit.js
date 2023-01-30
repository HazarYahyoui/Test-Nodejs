const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const produitSchema= new mongoose.Schema({
    name : {type: String, required: true},
    description: {type: String, required: true},
    quantity : {type: String, required: true},
    price : {type: String, required: true}
})

module.exports = mongoose.model('Produit', produitSchema);