import { CategoriesApiClient } from "./category";

class AppApiClient {
  categoris = new CategoriesApiClient();
}

export const appClient = new AppApiClient();
