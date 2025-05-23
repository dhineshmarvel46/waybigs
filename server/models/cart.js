const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  id: String,
  title: String,
  price: Number,
  image: String
});

const cartSchema = new mongoose.Schema({
  cart: [cartItemSchema]
});

const CartModel = mongoose.model('CartItem', cartSchema);

module.exports = CartModel;
