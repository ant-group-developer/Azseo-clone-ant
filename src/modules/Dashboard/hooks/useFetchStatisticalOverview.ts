import { fetchStatisticalOverview } from '@/modules/Dashboard/apis';
import { useQuery } from '@tanstack/react-query';
import { OrderStatisticsData, OrderStatisticsResponse } from '../types';

export const useFetchStatisticalOverview = () => {
    const { data, ...restReponse } = useQuery({
        queryKey: ['StatisticalOverview'],
        queryFn: fetchStatisticalOverview,
    });

    const defaultData: OrderStatisticsResponse<OrderStatisticsData> = {
        data: {
            totalOrderCompleted: 0,
            totalOrderInProgress: 0,
            totalOrderPartial: 0,
            totalOrderCanceled: 0,
            totalOrderPending: 0,
            totalOrderProcessing: 0,
        },
        message: '',
    };

    const dataStatisticalOverview = data?.data.data ?? defaultData.data;

    return {
        data: dataStatisticalOverview,
        ...restReponse,
    };
};
