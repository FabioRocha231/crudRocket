import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { Router } from "express";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";
import { CreateVideoController } from "./controllers/CreateVideoController";
import { GetAllVideosController } from "./controllers/GetAllVideosController";

const routes = Router();
/**
 * [X] C - Create - POST
 * [X] R - Read - GET
 * [X] U - Update - PUT
 * [X] D - Delete - DELETE
 */

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);

export { routes };
