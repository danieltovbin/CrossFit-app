import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

export const Product = mongoose.model("Product", productSchema);
