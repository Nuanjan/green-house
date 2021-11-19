const ProductController = require("../controllers/product.controller");
module.exports = function (app) {
  app.get("/api/products", ProductController.index);
  app.get("/api/products/:id", ProductController.getOneProduct);
  app.post("/api/products/new", ProductController.createProduct);
  app.delete("/api/products/:id", ProductController.deleteProduct);
};
