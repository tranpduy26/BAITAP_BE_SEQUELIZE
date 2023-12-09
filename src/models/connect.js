import { Sequelize } from "sequelize";
import config from '../config/config.js';

const {databaseName, databaseUserName, databasePassword, databasePort, databaseHost} = config
const sequelize = new Sequelize(databaseName, databaseUserName, databasePassword, {
    port: databasePort,
    dialect: "mysql",
    host: databaseHost,
});

export default sequelize;

// test connect thành công tới database hay chưa
// try{
//     sequelize.authenticate();
//      console.log("Ket noi thanh cong");
//  } catch (error){
//      console.log(`Ket noi that bai ${error}`)
//  }