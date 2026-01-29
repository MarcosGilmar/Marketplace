import { marketPlaceApiClient } from "../api/market-place";
import { AuthResponse } from "../interfaces/https/auth.response";
import { LoginHttpParams } from "../interfaces/https/login";
import { RegisterHttpParams } from "../interfaces/https/register";

export async function register(userData: RegisterHttpParams) {

    const { data } = await marketPlaceApiClient.post<AuthResponse>("/auth/register", userData);

    return data;
}

export async function login(userData: LoginHttpParams) {

    const { data } = await marketPlaceApiClient.post<AuthResponse>("/auth/login", userData);

    return data;
}