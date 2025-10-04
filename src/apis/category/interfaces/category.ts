import { BaseRecord } from "@/apis/base";
// @typescript-eslint/no-empty-object-type
export interface ICategory extends BaseRecord {
  title: string;
  description: string;
}
