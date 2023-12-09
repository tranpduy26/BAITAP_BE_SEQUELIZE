import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import { Sequelize } from "sequelize";

const model = initModels(sequelize);

// CREATE ORDER
const createOrder = async (req, res) => {
	try {
		let { user_id, food_id, amount, ma_code, arr_sub_id } = req.body;
		let newOrder = {
			user_id,
			food_id,
			amount,
			ma_code,
			arr_sub_id,
		};
        await model.orders.create(newOrder);
        res.send(`User ${user_id} thêm order thành công`);
	} catch (err) {
		res.send(err);
	}
};

export { createOrder };
