const ItemController = require("../controllers/item.controller");
module.exports = function (app) {
  app.get("/api/items", ItemController.index);
  app.get("/api/items/:id", ItemController.getOneItem);
  app.post("/api/items/new", ItemController.createItem);
  app.delete("/api/items/:id", ItemController.deleteItem);

  // show all Item that in the same order_id
  app.get(
    "/api/Items/orders/:orderId",
    ItemController.getAllItemBelongToOrderId
  );
};
