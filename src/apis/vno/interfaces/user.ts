import { BaseRecord } from "@/apis/base";

export interface IUser extends BaseRecord {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  avatar: string;
}
