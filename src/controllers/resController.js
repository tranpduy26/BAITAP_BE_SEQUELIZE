import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const model = initModels(sequelize);

const getListRes = async (req, res) => {
    let data = await model.restaurant.findAll();

    res.send(data);
};

// LẤY DANH SÁCH LIKE THEO NHÀ HÀNG
const getLikeListRes = async (req, res) => {
    try {
        let { resId } = req.params;
		let data = await model.like_res.findAll({
			where: {
				res_id: resId,
			},
		});
        res.send(data);
    } catch (err) {
        res.send(err)
    }
}

// LẤY DANH SÁCH LIKE THEO USER
const getLikeListUser = async (req, res) => {
	try {
		let { userId } = req.params;
		let data = await model.like_res.findAll({
			where: {
				user_id: userId,
			},
		});
		res.send(data);
	} catch (err) {
		res.send(err);
	}
};

// LẤY DANH SÁCH ĐÁNH GIÁ THEO NHÀ HÀNG
const getListRateRes = async (req,res) => {
    try {
        let {resId }= req.params;
        let data = await model.rate_res.findAll({
            where: {
                res_id: resId
            }
        });
        res.send(data);
    } catch (err){
        res.send(err);
    }
}

// LẤY DANH SÁCH ĐÁNH GIÁ THEO USER
const getListRateResUser = async (req, res) => {
	try {
		let {userId} = req.params;
		let data = await model.rate_res.findAll({
			where: {
				user_id: userId,
			},
		});
		res.send(data);
	} catch (err) {
		res.send(err);
	}
};

export {
	getListRes,
	getLikeListRes,
	getLikeListUser,
	getListRateRes,
	getListRateResUser,
};