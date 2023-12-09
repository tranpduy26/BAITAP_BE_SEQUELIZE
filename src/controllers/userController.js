/** @format */

import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import { Sequelize } from "sequelize";

const model = initModels(sequelize);

// CREATE RATE
const createRate = async (req, res) => {
	try {
		let { user_id, res_id, amount, date_rate } = req.body;
        // Check user đã rate nhà hàng hay chưa
        let checkRate = await model.rate_res.findOne({
            where: {
                user_id,
                res_id
            }
        })
        if(!checkRate){
            let newRate = {
				user_id,
				res_id,
				amount,
				date_rate,
			};
			await model.rate_res.create(newRate);

			res.status(201).send(
				`User ${user_id} thêm đánh giá thành công nhà hàng ${res_id}`
			);
        } else {
            res.send(`User ${user_id} đã đánh giá nhà hàng ${res_id}, Bạn có muốn đánh giá lại ?`);
        }
	} catch (err) {
		res.send(err);
	}
};

// CREATE LIKE
const createLike = async (req, res) => {
	try {
        let { user_id, res_id, date_like } = req.body;
		// Kiểm tra user đã like hay chưa
		let checkLike = await model.like_res.findOne({
			where: {
				user_id,
				res_id
			},
		});

		if (!checkLike) {
			let newLike = {
				user_id,
				res_id,
				date_like,
			};
			await model.like_res.create(newLike);
			res.status(201).send(`User ${user_id} thêm like thành công nhà hàng ${res_id}`);
		} else {
			res.send(`User ${user_id} đã like nhà hàng ${res_id}, bạn có muốn unlike ?`);
		}
	} catch (err) {
		res.send(err);
	}
};

// CREATE UNLIKE
const unLike = async (req, res) => {
	try {
        let {user_id, res_id} = req.body;
        // Check user đã like nhà hàng hay chưa
        let checkUserLike = await model.like_res.findOne({
            where: {
                user_id,
                res_id
            }
        });
		if (checkUserLike) {
			await model.like_res.destroy({
				where: {
					user_id,
					res_id
				},
			});
			res.send(`User ${user_id} unlike thành công`);
		} else {
			res.send(`User ${user_id} chưa like nhà hàng ${res_id}, bạn có muốn like nhà hàng ?`);
		}
	} catch (err) {
		res.send(err);
	}
};

export { createRate, createLike, unLike };
