import dotenv from "dotenv"
import { DataSource } from 'typeorm';
import { ErrorHandler } from '../core/class/errorHandler';

dotenv.config()

const AppDataSource = new DataSource({
  type: process.env.TYPEORM_CONNECTION as any,
  host: process.env.TYPEORM_HOST ,
  port: parseInt(process.env.TYPEORM_PORT) ,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  migrations: [__dirname + '/migrations/**/*.ts'],
  entities: [__dirname + '/entities/**/*.ts'],
});

(async () => {
  const {errorHandler} = new ErrorHandler();
  const [error, result] = await errorHandler(AppDataSource.initialize())
  if(error) return console.error("Error during Data Source initialization", error)
  console.log("Data Source has been initialized!")
})();

export default AppDataSource