import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from './productsCont.js';
import { ROLES_LIST } from '../../config/roles_list.js';
import verifyRoles from '../../middleware/verifyRoles.js';
import verifyJWT from '../../middleware/verifyJWT.js';
const router = express.Router()

router
.get('/get', getAllProducts)
.post('/create',verifyJWT, verifyRoles(ROLES_LIST.Admin), createProduct)
.put('/update', verifyJWT, verifyRoles(ROLES_LIST.Admin), updateProduct)
.delete('/delete', verifyJWT, verifyRoles(ROLES_LIST.Admin), deleteProduct)
.get('/get/:id', getProduct)

export default router;