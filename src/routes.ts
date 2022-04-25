import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { Router } from "express";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";

const routes = Router();
/**
 * [X] C - Create - POST
 * [X] R - Read - GET
 * [ ] U - Update - PUT
 * [X] D - Delete - DELETE
 */

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

export { routes };
