import { LOCALE } from '@/enums/common';
import { formatCurrency } from '@/helper';
import { ColumnType } from 'antd/es/table';
import { DataFilterParams, ServiceStatistic } from '../types';

export const OFFSET_DEFAULT = 0;
export const LIMIT_DEFAULT = 80;
export const defaultFilterParam: DataFilterParams = {
    language: LOCALE.EN,
    // offset: OFFSET_DEFAULT,
    // limit: LIMIT_DEFAULT,
};

export const columns: ColumnType<ServiceStatistic>[] = [
    {
        dataIndex: 'service_id',
        title: 'ID',
        key: 'service_id',
    },
    {
        dataIndex: 'service_name',
        title: 'Service Name',
        key: 'service_name',
        ellipsis: true,
        width: 300,
    },
    {
        dataIndex: 'categories_name',
        title: 'Category',
        key: 'categories_name',
        width: 180,
    },
    {
        dataIndex: 'provider_name',
        title: 'Provider',
        key: 'provider_name',
    },
    {
        dataIndex: 'service_initial_rate',
        title: 'Undiscounted Price',
        key: 'service_initial_rate',
        render: (value: string) => formatCurrency(Number(value)), // Định dạng tiền tệ
        align: 'center',
    },
    {
        dataIndex: 'service_rate',
        title: 'Rate Per 1000 Original',
        key: 'service_rate',
        render: (value: string) => formatCurrency(Number(value)), // Định dạng tiền tệ,
        align: 'center',
    },
    {
        dataIndex: 'service_ratio',
        title: 'Ratio',
        key: 'service_ratio',
        render: (value: number) => `${value}%`,
        align: 'center',
    },
    {
        dataIndex: 'service_level',
        title: 'Level',
        key: 'service_level',
        width: 70,
    },
    {
        dataIndex: 'service_status',
        title: 'Status',
        key: 'service_status',
        align: 'center',
    },
    {
        dataIndex: 'totalQuantity',
        title: 'Quantity',
        key: 'totalQuantity',
        align: 'center',
    },
    {
        dataIndex: 'totalCountOfServiceUsage',
        title: 'Usage',
        key: 'totalCountOfServiceUsage',
        align: 'center',
    },
    {
        dataIndex: 'totalMoney',
        title: 'Revenue',
        key: 'totalMoney',
        render: (value: number) => formatCurrency(value), // Định dạng tiền tệ,
        align: 'center',
    },
];
