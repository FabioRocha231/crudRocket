import { ErrorHandler } from "../core/class/errorHandler";
import { IDeleteCategoryService } from "../core/interface";
import AppDataSource from "../db/dataSource";
import { Category } from "../entities";

export class DeleteCategoryService implements IDeleteCategoryService {
  async execute(id: string) {
    const { errorHandler } = new ErrorHandler();
    const repo = AppDataSource.getRepository(Category);
    const [error, result] = await errorHandler(repo.findOne({ where: { id } }));
    if (!result) return new Error("Category does not exists!");

    await repo.delete(id);
  }
}
