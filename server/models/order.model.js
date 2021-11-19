const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema(
  {
    orderNumber: {
      type: String,
      required: [true, "Order Number is required"],
    },
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Order", OrderSchema);
