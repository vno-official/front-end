import { CategoriesApiClient } from "./category";

class VnoClient {
  categoris = new CategoriesApiClient();
}

export const appClient = new VnoClient();
