import { ErrorHandler } from "./../core/class/errorHandler";
import { CategoryRequest, ICreateCategoryService } from "../core/interface/CreateCategoryService";
import AppDataSource from "../db/dataSource";
import { Category } from "../entities/Category";

export class CreateCategoryService implements ICreateCategoryService {
  async execute({ name, description }: CategoryRequest): Promise<Category | Error> {
    const repo = AppDataSource.getRepository(Category);
    console.log(repo, "repo");
    const check = await repo.findOneByOrFail({ name });
    if (check) return new Error("Category already exists");

    console.log(name, description);

    const category = repo.create({ name, description });
    await repo.save(category);

    return category;
  }
}
