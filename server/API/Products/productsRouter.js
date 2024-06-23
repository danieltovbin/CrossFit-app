import express from 'express';
import { deleteProduct, getAllProducts, getProduct, updateProduct } from './productsCont.js';
const router = express.Router()

router
.get('/get-products', getAllProducts)
// .put('/update-products', updateProduct)
.delete('/delete-product', deleteProduct)
.get('/get-product/:id', getProduct)

export default router;