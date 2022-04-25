import { ErrorHandler } from "../core/class/errorHandler";
import { IUpdateCategoryService } from "../core/interface";
import { CategoryUpdateRequest } from "../core/interface/services/UpdateCategoryService";
import AppDataSource from "../db/dataSource";
import { Category } from "../entities";

export class UpdateCategoryService implements IUpdateCategoryService {
  async execute({ id, name, description }: CategoryUpdateRequest): Promise<Category | Error> {
    const repo = AppDataSource.getRepository(Category);
    const { errorHandler } = new ErrorHandler();
    const [error, category] = await errorHandler(repo.findOne({ where: { id } }));

    if (!category) return new Error("Category does not exists!");
    if (!name || !description) return new Error("Name and description are required!");

    category.name = name;
    category.description = description;

    await repo.save(category);

    return category;
  }
}
