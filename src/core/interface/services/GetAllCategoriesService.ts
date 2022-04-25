import { Category } from "../../entities";

export interface IGetAllCategoriesService {
  execute(): Promise<Category[]>;
}
