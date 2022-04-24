import { ErrorHandler } from "./../core/class/errorHandler";
import { CategoryRequest, ICreateCategoryService } from "../core/interface/CreateCategoryService";
import AppDataSource from "../db/dataSource";
import { Category } from "../entities/Category";

export class CreateCategoryService implements ICreateCategoryService {
  async execute({ name, description }: CategoryRequest): Promise<Category | Error> {
    const { errorHandler } = new ErrorHandler();
    const repo = AppDataSource.getRepository(Category);
    const [error, result] = await errorHandler(repo.findOneBy({ name }));
    console.log("debug after enter in to repo.findOneBy: ", error.message, result);
    if (!error) return new Error("Category already exists");

    const category = repo.create({ name, description });
    console.log("error scanner before save", category);

    const [errorOnCreateCategory, resultSuccess] = await errorHandler(repo.save(category));

    console.log("error scanner after save", errorOnCreateCategory, resultSuccess);
    if (errorOnCreateCategory) return new Error(error.message);

    return category;
  }
}
