import { fetchServiceStatistic } from '@/modules/Dashboard/apis';
import {
    ListServiceStatisticResponse,
    ServiceStatistic,
    ServiceStatisticParams,
} from '@/modules/Dashboard/types';
import { useQuery } from '@tanstack/react-query';

export const useFetchServiceStatistic = (params: ServiceStatisticParams) => {
    const { data, ...restReponse } = useQuery({
        queryKey: ['ServiceStatistic', params],
        queryFn: () => fetchServiceStatistic(params),
        placeholderData: (previousData) => previousData,
    });

    const defaultData: ListServiceStatisticResponse<ServiceStatistic> = {
        message: '',
        total: 0,
        totalMoneySum: 0,
        totalInitialMoneySum: 0,
        data: [],
    };
    const dataServiceStatistic = data?.data ?? defaultData;

    return {
        data: dataServiceStatistic,
        ...restReponse,
    };
};
