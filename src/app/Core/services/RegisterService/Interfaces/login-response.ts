import { UserResponseLogin } from "./user-response-login";

export interface LoginResponse {
    message: string;
    user : UserResponseLogin;
    token: string;
}
