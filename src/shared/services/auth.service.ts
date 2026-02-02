import { baseURL, marketPlaceApiClient } from "../api/market-place";
import { AuthResponse } from "../interfaces/http/auth.response";
import { LoginHttpParams } from "../interfaces/http/login";
import { RegisterHttpParams } from "../interfaces/http/register";
import { UploadAvatarResponse } from "../interfaces/http/upload-avatar";

export async function register(userData: RegisterHttpParams) {

    const { data } = await marketPlaceApiClient.post<AuthResponse>("/auth/register", userData);

    return data;
}

export async function login(userData: LoginHttpParams) {

    const { data } = await marketPlaceApiClient.post<AuthResponse>("/auth/login", userData);

    return data;
}

export async function uploadAvatar(avatarUri: string) {

    const formData = new FormData();

    formData.append("avatar", {
        uri: avatarUri,
        type: "image/jpeg",
        name: "avatar.jpeg",
    } as unknown as Blob);

    const { data } = await marketPlaceApiClient.post<UploadAvatarResponse>("/user/avatar");

    data.url = `${baseURL}${data.url}`;

    return data;
}