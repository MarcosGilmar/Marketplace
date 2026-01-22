import { marketPlaceApiClient } from "../api/market-place";
import { RegisterHttpParams, RegisterHttpResponse } from "../interfaces/https/register";

export async function register(userData: RegisterHttpParams): Promise<RegisterHttpResponse> {

    const { data } = await marketPlaceApiClient.post<RegisterHttpResponse>("/auth/register", userData)

    return data
}