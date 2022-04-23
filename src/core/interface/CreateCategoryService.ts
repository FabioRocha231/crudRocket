import { Category } from "../../entities/Category";

export interface CategoryRerquest  {
  name: string;
  description: string;
}
export interface ICreateCategoryService {
  execute({name, description}:CategoryRerquest) : Promise<Category | Error>
}