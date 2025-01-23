export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginResponse {
    message: string;
    token: string;
    refresh_token: string;
}

export interface DetailResponse<T> {
    data: T;
}
