import {
    inForOrderMoneyData,
    InForOrderMoneyResponse,
    ListServiceResponse,
    ListServiceStatisticResponse,
    OrderStatisticsData,
    OrderStatisticsResponse,
    Service,
    ServiceStatistic,
    ServiceStatisticParams,
} from '@/modules/Dashboard/types';
import axiosClient from '../../../apiClient/axiosClient';

export const fetchInfoOrderMoney = () => {
    return axiosClient.get<InForOrderMoneyResponse<inForOrderMoneyData>>(
        '/order/info-order-money?language=en'
    );
};

export const fetchStatisticalOverview = () => {
    return axiosClient.get<OrderStatisticsResponse<OrderStatisticsData>>(
        'order/statistical-overview?language=en'
    );
};

export const fetchServiceList = () => {
    return axiosClient.get<ListServiceResponse<Service>>(
        'service/list?language=en'
    );
};

export const fetchServiceStatistic = (params: ServiceStatisticParams) => {
    return axiosClient.get<ListServiceStatisticResponse<ServiceStatistic>>(
        'service/statistics',
        { params }
    );
};

export const dashboardApi = {
    fetchInfoOrderMoney,
    fetchStatisticalOverview,
    fetchServiceList,
    fetchServiceStatistic,
};
