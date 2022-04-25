import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { Router } from "express";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);

export { routes };
