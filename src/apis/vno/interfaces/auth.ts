import { BaseRequest, BaseResponse } from "@/apis/base";
import { IUser } from "./user";

export interface ISignInRequest extends BaseRequest {
  body: {
    email: string;
    password: string;
  };
  params: {
    provider: "email";
  };
}

export type ISignInResponse = BaseResponse<{
  accessToken: string;
  user: IUser;
}>;

export interface ISignUpRequest extends BaseRequest {
  body: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
  };
  params: {
    provider: "email";
  };
}

export type ISignUpResponse = BaseResponse<{
  accessToken: string;
  user: IUser;
}>;
