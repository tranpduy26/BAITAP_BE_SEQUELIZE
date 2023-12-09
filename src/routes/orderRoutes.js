import express from 'express';
import { createOrder } from '../controllers/orderController.js';

const orderRoutes = express.Router();

orderRoutes.use("/addOrder", createOrder);

export default orderRoutes;