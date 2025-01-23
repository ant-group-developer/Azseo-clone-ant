import axiosClient from '@/apiClient/axiosClient';
import { UserDetail } from '@/modules/user/types';
import { DetailResponse, LoginPayload, LoginResponse } from '../types';

export const authApi = {
    login(payload: LoginPayload) {
        return axiosClient.post<LoginResponse>(
            `/auth/login?language=en`,
            payload
        );
    },

    refreshToken(refresh_token: string) {
        return axiosClient.post<LoginResponse>('/auth/refresh-token', {
            refresh_token,
        });
    },

    getInfo() {
        try {
            return axiosClient.get<DetailResponse<UserDetail>>(
                '/user/infor?language=en'
            );
        } catch (error) {
            return error;
        }
    },
};
