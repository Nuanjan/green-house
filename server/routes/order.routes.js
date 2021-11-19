const OrderController = require("../controllers/order.controller");
module.exports = function (app) {
  app.get("/api/orders", OrderController.index);
  app.get("/api/orders/:id", OrderController.getOneOrder);
  app.post("/api/orders/new", OrderController.createOrder);
  app.put("/api/orders/:id/edit", OrderController.updateOrder);
  app.delete("/api/orders/:id", OrderController.deleteOrder);
};
