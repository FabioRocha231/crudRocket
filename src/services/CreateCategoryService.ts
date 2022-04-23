import { CategoryRerquest, ICreateCategoryService } from "../core/interface/CreateCategoryService";
import AppDataSource from "../db/dataSource";
import { Category } from "../entities/Category";

export class CreateCategoryService implements ICreateCategoryService {

  async execute({name, description}:CategoryRerquest) : Promise<Category | Error> {

     const repo = AppDataSource.getRepository(Category);

      if(await repo.findOne({where: {name}})) return new Error("Category already exists")

     const category = repo.create({
        name,
        description
     });
     await repo.save(category);
     return category;
  }

}