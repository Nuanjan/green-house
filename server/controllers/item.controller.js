const Item = require("../models/item.model");
const Order = require("../models/order.model");

module.exports.index = (req, res) => {
  Item.find()
    .then((allItems) => res.json({ items: allItems }))
    .catch((err) => res.json({ err }));
};
module.exports.getOneItem = (req, res) => {
  Item.findOne({ _id: req.params.id })
    .then((oneItem) => res.json({ item: oneItem }))
    .catch((err) => res.json({ err }));
};
module.exports.createItem = (req, res) => {
  console.log(req.body, " this is request body");
  Order.findOne({ _id: req.body.order_id }).then((order) => {
    Item.create({
      name: req.body.name,
      description: req.body.description,
      quantity: req.body.quantity,
      price: req.body.price,
      category: req.body.category,
    })
      .then((item) => {
        order.items.push(item);
        return order.save();
      })
      .then((order) => res.json({ order }))
      .catch((err) => res.json({ err }));
  });
};
module.exports.deleteItem = (req, res) => {
  Item.deleteOne({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) => res.json({ err }));
};
module.exports.getAllItemBelongToOrderId = (req, res) => {
  Item.find({ order_id: req.params.orderId })
    .populate("order_id")
    .then((allItems) => res.json({ Items: allItems }))
    .catch((err) => res.json({ err }));
};
