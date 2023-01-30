const User = require('../models/Client');
const bcrypt= require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

exports.createUser = async (req, res) => {
  const salt= await bcrypt.genSalt(10); 
  const hashedPass= await bcrypt.hash(req.body.password, salt);

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPass,
    role: req.body.role
  });

  await User.create(user);

  res.send(user);
};

exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.Id);

  res.send(user);
};

exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.Id);

  res.send(user);
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.Id);

  res.send({ message: 'user deleted' });
};