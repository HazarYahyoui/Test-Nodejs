const Order = require('../models/commande');
const Produit = require('../models/Produit')
exports.getAllOrders = async (req, res) => {
  const orders = await Order.find();
  res.send(orders);
};

exports.createOrder= async(req, res) =>{
    
    const order = new Order({
        totalPrice: req.body.totalPrice,
        client: req.body.client,
        products: req.body.products
    });
    const client = await User.findOne(req.params.IdUser);
    const products = await Produit.findOne(req.params.IdProduit);
   
     supprime= await Produit.findByIdAndUpdate(req.params.IdProduit, {$inc: -1}, {new:true});
     
    res.send(client, products)
    const result = await order.save();
    res.send(result);
};

exports.getOrder = async (req, res) => {
    const order = await Order.findById(req.params.Id);
  
    res.send(order);
  };
