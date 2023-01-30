const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const orderSchema= new mongoose.Schema({
    totalPrice : {type: Number, required: true},
    client: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Produit'}]

})

module.exports = mongoose.model('Order', orderSchema);