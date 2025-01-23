import axiosClient from '@/apiClient/axiosClient';
import { ListResponse } from '@/types';
import { PlatformData, PlatformParams } from '../types';

export const platformApi = {
    getList: (params: PlatformParams) => {
        return axiosClient.get<ListResponse<PlatformData>>('platform/list', {
            params,
        });
    },
};
