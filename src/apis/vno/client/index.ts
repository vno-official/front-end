import { AuthApiClient } from "./auth";
import { CategoriesApiClient } from "./category";

class VnoClient {
  categoris = new CategoriesApiClient();
  auth = new AuthApiClient();
}

export const appClient = new VnoClient();
