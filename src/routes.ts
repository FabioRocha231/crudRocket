import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { Request, Response, Router } from "express";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);

export { routes };
