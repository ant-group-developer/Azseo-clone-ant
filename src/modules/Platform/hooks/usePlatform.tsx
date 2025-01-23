import { ListResponse } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { platformApi } from '../apis';
import { platformKeys } from '../constants';
import { PlatformData, PlatformParams } from '../types';

export default function usePlatform(params: PlatformParams) {
    const { data, ...resResponse } = useQuery({
        queryKey: [...platformKeys.getList, params],
        queryFn: () => platformApi.getList(params),
        placeholderData: (previousData) => previousData,
    });

    const defaultData: ListResponse<PlatformData> = {
        message: '',
        total: 0,
        data: [],
    };

    const dataPlatform = data?.data ?? defaultData;

    return {
        data: dataPlatform,
        ...resResponse,
    };
}
