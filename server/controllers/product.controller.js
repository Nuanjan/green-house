const Product = require("../models/product.model");
const Order = require("../models/order.model");

module.exports.index = (req, res) => {
  Product.find()
    .then((allProducts) => res.json({ products: allProducts }))
    .catch((err) => res.json({ err }));
};
module.exports.getOneProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((oneProduct) => res.json({ product: oneProduct }))
    .catch((err) => res.json({ err }));
};
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then((product) => res.json({ product }))
    .catch((err) => {
      return res.json({ err });
    });
};
module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) => res.json({ err }));
};

