import express from 'express';
import { login, logout, refreshToken, register } from './authCont.js';
const router = express.Router()

router
.post('/register', register)
.get('/refresh-token', refreshToken)
.post('/login', login)
.get('/logout', logout)

export default router;