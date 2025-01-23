import { SortOrder } from '@/enums/common';

export interface ListServiceResponse<T> {
    message: string;
    total: number;
    data: Array<T>;
}

export interface Service {
    id: number;
    name: string;
    icon: string;
    location: number;
    createdAt: string;
    platformId: number;
    platform: Platform;
    serviceCategories: ServiceCategory[];
}

export interface Platform {
    id: number;
    name: string;
    icon: string;
    location: number;
    createdAt: string;
}

export interface ServiceCategory {
    id: number;
    serviceId: number;
    categoriesId: number;
    service: ServiceDetail;
}

export interface ServiceDetail {
    id: number;
    service: string;
    name: string;
    type: string;
    ratio: number;
    rate: string;
    initial_rate: string;
    status: number;
    min: string;
    max: string;
    dripfeed: string;
    refill: string;
    cancel: string;
    level: number;
    description_en: string;
    providerId: number;
    provider: Provider;
    rate_config: string;
}

export interface Provider {
    id: number;
    name: string;
    link: string;
    status: number;
}

export interface ListServiceStatisticResponse<T> {
    message: string;
    total: number;
    totalMoneySum: number;
    totalInitialMoneySum: number;
    data: T[];
}

export interface ServiceStatistic {
    service_id: number;
    service_service: string;
    service_name: string;
    service_type: string;
    service_ratio: number;
    service_rate: string;
    service_initial_rate: string;
    service_status: number;
    service_min: string;
    service_max: string;
    service_dripfeed: string;
    service_refill: string;
    service_cancel: string;
    service_level: number;
    service_description_en: string;
    serviceCategories_id: number;
    categories_id: number;
    categories_name: string;
    provider_id: number;
    provider_name: string;
    provider_link: string;
    provider_status: number;
    provider_createAt: string;
    provider_updatedAt: string | null;
    totalMoney: number;
    totalInitialMoney: number;
    totalQuantity: number;
    totalCountOfServiceUsage: string;
}

export interface ServiceStatisticParams {
    language: string;
    keyword?: string;
    categoriesId?: number;
    providerId?: number;
    sortTotalMoney?: SortOrder.ASC | SortOrder.DESC;
    sortTotalQuantity?: SortOrder.ASC | SortOrder.DESC;
    sortTotalCountOfServiceUsage?: SortOrder.ASC | SortOrder.DESC;
    startDate?: string;
    endDate?: string;
    limit?: number;
    offset?: number;
}

export interface DataFilterParams extends ServiceStatisticParams {
    offset?: number;
    limit?: number;
}

export interface Message {
    message: string;
}

export interface OrderStatisticsData {
    totalOrderCompleted: number;
    totalOrderInProgress: number;
    totalOrderPartial: number;
    totalOrderCanceled: number;
    totalOrderPending: number;
    totalOrderProcessing: number;
}

export interface OrderStatisticsResponse<OrderStatisticsData> extends Message {
    data: OrderStatisticsData;
}

export interface inForOrderMoneyData {
    fundsPresent: number;
    orderProgress: number;
    totalMoney: number;
    totalOrderFinish: number;
}

export interface InForOrderMoneyResponse<inForOrderMoneyData> extends Message {
    data: inForOrderMoneyData;
}
