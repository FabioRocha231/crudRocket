import { Category } from "../../../entities";

export interface IDeleteCategoryService {
  execute(id: string): Promise<Category | Error>;
}
