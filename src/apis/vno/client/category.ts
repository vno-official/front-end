import { VnoCrudApiClient } from "./crud";
import { ICategory } from "../interfaces";
export class CategoriesApiClient extends VnoCrudApiClient<ICategory> {
  constructor() {
    super({ resource: "categories" });
  }
}
