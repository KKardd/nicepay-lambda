import axios from "axios";
import {Dialect, Sequelize} from "sequelize";

const dbType: Dialect = process.env.DATABASE_TYPE as Dialect;
const dbHost: string = process.env.DATABASE_HOST!;
const dbUsername: string = process.env.DATABASE_USERNAME!;
const dbPassword: string = process.env.DATABASE_PASSWORD!;
const dbName: string = process.env.DATABASE_NAME!;
const testURL: string = process.env.TEST_URL!;

// const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
//     host: dbHost,
//     dialect: dbType,
//     dialectOptions: {
//         ssl: {
//             rejectUnauthorized: true,
//         },
//     },
// });

export async function pay(event) {
    const axiosData = await axios({
        method: "get",
        url: testURL,
    });
    console.log(axiosData.data);
    // return await sequelize.query("SELECT * FROM users;");
}
