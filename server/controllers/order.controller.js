const Order = require("../models/order.model");

module.exports.index = (req, res) => {
  console.log("this is request");
  Order.find()
    .populate("items")
    .then((allOrders) => res.json({ orders: allOrders }))
    .catch((err) => res.json({ err }));
};
module.exports.getOneOrder = (req, res) => {
  Order.findOne({ _id: req.params.id })
    .populate("items")
    .then((oneOrder) => res.json({ order: oneOrder }))
    .catch((err) => res.json({ err }));
};
module.exports.createOrder = (req, res) => {
  Order.exists({ orderNumber: req.body.orderNumber }, (err, result) => {
    if (result) {
      console.log(result, " this is result");
      res.json({ message: "Order already exist!" });
    } else {
      Order.create(req.body)
        .then((order) => res.json({ order }))
        .catch((err) => {
          return res.json({ err });
        });
    }
  });
};
module.exports.updateOrder = (req, res) => {
  Order.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true, runValidators: true }
  )
    .then((updatedOrder) => res.json({ order: updatedOrder }))
    .catch((err) => res.json({ err }));
};
module.exports.deleteOrder = (req, res) => {
  console.log(req.params, " this is params");
  Order.deleteOne({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) => res.json({ err }));
};
