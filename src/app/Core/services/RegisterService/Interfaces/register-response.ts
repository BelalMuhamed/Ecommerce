import { RegisterUser } from "./register-user";

export interface RegisterResponse {
    message: string;
    user:RegisterUser;
  token: string;
}

