import { Category } from "../../entities/Category";

export interface CategoryRequest  {
  name: string;
  description: string;
}
export interface ICreateCategoryService {
  execute({name, description}:CategoryRequest) : Promise<Category | Error>
}