import express from 'express';
import { createLike, createRate, unLike } from '../controllers/userController.js';

const userRoutes = express.Router();

// API THÊM ĐÁNH GIÁ
userRoutes.use("/rate", createRate)

// API LIKE
userRoutes.use("/like", createLike)

// API UNLIKE
userRoutes.use("/unlike", unLike)

export default userRoutes;