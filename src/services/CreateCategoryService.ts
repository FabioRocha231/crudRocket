import { ErrorHandler } from "./../core/class/errorHandler";
import AppDataSource from "../db/dataSource";
import { Category } from "../entities/Category";
import { ICreateCategoryService } from "../core/interface";
import { CategoryRequest } from "../core/interface/services/CreateCategoryService";

export class CreateCategoryService implements ICreateCategoryService {
  async execute({ name, description }: CategoryRequest): Promise<Category | Error> {
    const repo = AppDataSource.getRepository(Category);
    const { errorHandler } = new ErrorHandler();
    const [error, result] = await errorHandler(repo.findOne({ where: { name } }));

    if (result) return new Error("Category already exists");

    const category = repo.create({ name, description });
    await repo.save(category);

    return category;
  }
}
