import { BaseCrudApiClient, BaseRecord } from "@/apis/base";
import { APP_API_URL } from "@/config/env";

export interface IAppCrudApiClientOptions {
  resource: string;
}

export class AppCrudApiClient<
  T extends BaseRecord = BaseRecord
> extends BaseCrudApiClient<T> {
  constructor({ resource }: IAppCrudApiClientOptions) {
    const baseUrl =
      typeof window === "undefined"
        ? `${APP_API_URL}/${resource}`
        : `${window.location.origin}/app-api/v1/${resource}`;
    super({ baseUrl });
    this.client.interceptors.request.use(async (config) => {
      return config;
    });
  }
}
