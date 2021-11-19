const mongoose = require("mongoose");
const ItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    quantity: {
      type: Number,
      default: 1,
      required: [true, "quantity is required"],
    },
    price: {
      type: Number,
      min: 0,
      required: [true, "quantity is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Item", ItemSchema);
