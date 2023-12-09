import express from 'express';
import userRoutes from './userRoutes.js';
import resRoutes from './resRoutes.js';
import orderRoutes from './orderRoutes.js';

const rootRoutes = express.Router();
rootRoutes.use("/restaurant", resRoutes);
rootRoutes.use("/user", userRoutes);
rootRoutes.use("/order", orderRoutes);

export default rootRoutes;