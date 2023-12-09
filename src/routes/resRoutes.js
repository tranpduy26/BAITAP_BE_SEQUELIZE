import express from "express";
import { getLikeListRes, getLikeListUser, getListRateRes, getListRateResUser, getListRes } from "../controllers/resController.js";

const resRoutes = express.Router();

// API lấy danh sách like theo nhà hàng
resRoutes.use("/like-res/:resId", getLikeListRes);

// API lấy danh sách like theo user
resRoutes.use("/like-res-user/:userId", getLikeListUser);

// API lấy danh sách đánh giá theo nhà hàng
resRoutes.use("/rate-res/:resId", getListRateRes);

// API lấy danh sách đánh giá theo user
resRoutes.use("/rate-res-user/:userId", getListRateResUser);

export default resRoutes;
