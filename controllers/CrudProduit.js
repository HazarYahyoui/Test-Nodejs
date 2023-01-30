const Produit = require('../models/Produit');

exports.getAllProducts = async (req, res) => {
  const produits = await Produit.find();
  res.send(produits);
};

exports.createProduct = async (req, res) => {
  const produit = new Produit({
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
    price: req.body.price
  });

  await Produit.create(produit);

  res.send(produit);
};

exports.getProduct = async (req, res) => {
  const produit = await Produit.findById(req.params.Id);

  res.send(produit);
};

exports.updateProduct = async (req, res) => {
  const produit = await Produit.findByIdAndUpdate(req.params.Id);

  res.send(produit);
};

exports.deleteProduct = async (req, res) => {
  await Produit.findByIdAndDelete(req.params.Id);

  res.send({ message: 'product deleted' });
};