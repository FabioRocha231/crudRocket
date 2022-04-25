import { Category } from "../../../entities";
import { CategoryRequest } from "./CreateCategoryService";

export interface CategoryUpdateRequest extends CategoryRequest {
  id: string;
}

export interface IUpdateCategoryService {
  execute({ name, description, id }: CategoryUpdateRequest): Promise<Category | Error>;
}
