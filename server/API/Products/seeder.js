import connectDB from "../../config/dbConn.js";
import { Product } from "./productsModel.js";

const seedProducts = [
  {
    name: "Rope",
    price: 15,
    imgUrl:
      "https://www.tradeinn.com/f/13875/138757909/spokey-crossfit-midd-jump-rope.jpg",
  },
  {
    name: "Barbell",
    price: 330,
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0553/4567/6427/products/Fitness-Town-FH6040-B-8-Bearing-Men_s-Barbell-Square_1080x1080_crop_center.jpg?v=1663111079",
  },
  {
    name: "Hole Carbon Hand Grips",
    price: 40,
    imgUrl:
      "https://www.blkboxfitness.com/cdn/shop/products/BLKBOX3HoleGrips_2copy.jpg?v=1657100053",
  },
  {
    name: "Wrist Straps",
    price: 25,
    imgUrl:
      "https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/8/1/811irK6j8PL._AC_SL1500_.jpg",
  },
  {
    name: "Nike Metcon 8",
    price: 150,
    imgUrl:
      "https://img.sport2000.fr/o5vZL8pZC4yc8Jen-Ykj44Tw5DOkUPITd1rz5yg4GAE/resize:fit:550:550/aHR0cHM6Ly93d3cu/c3BvcnQyMDAwLmZy/L21lZGlhL2ltYWdl/L2RvOTMyNy0wMDEt/c3BvcnQyMDAwL3dl/Yi1kbzkzMjctMDAx/LTAyLmpwZw.webp",
  },
  {
    name: "Tape - 3 Rolls",
    price: 34.99,
    imgUrl:
      "https://images-cdn.ubuy.co.in/65c257a2c8a56d78ab2471e3-weightlifting-house-weight-lifting-thumb.jpg",
  },
  {
    name: "2pood Belt",
    price: 64.99,
    imgUrl:
      "https://sharpentheaxeco.com/cdn/shop/files/DWC04670.jpg?v=1697489959",
  },
];

export const seedDB = async () => {
  await connectDB();
  try {
    await Product.deleteMany({});
    await Product.insertMany(seedProducts);
  } catch (error) {
    console.error("Error sending database:", error);
  }
};
