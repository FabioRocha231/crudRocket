import 'dotenv/config';
import { DataSource } from 'typeorm';
import { ErrorHandler } from '../core/class/errorHandler';


const {errorHandler} = new ErrorHandler();
const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "test",
  password: "test",
  database: "test",
})

const initialize = async () => {
  const [error, result] = await errorHandler(AppDataSource.initialize())
  if(error) return console.error("Error during Data Source initialization", error)

  console.log("Data Source has been initialized!")
  initialize();
}