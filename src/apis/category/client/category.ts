import { AppCrudApiClient } from "./crud";
import { ICategory } from "../interfaces";
export class CategoriesApiClient extends AppCrudApiClient<ICategory> {
  constructor() {
    super({ resource: "categories" });
  }
}
