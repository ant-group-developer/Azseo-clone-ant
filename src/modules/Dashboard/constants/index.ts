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
    },
    {
        dataIndex: 'categories_name',
        title: 'Category',
        key: 'categories_name',
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
    },
    {
        dataIndex: 'service_rate',
        title: 'Rate Per 1000 Original',
        key: 'service_rate',
        render: (value: string) => formatCurrency(Number(value)), // Định dạng tiền tệ
    },
    {
        dataIndex: 'service_ratio',
        title: 'Ratio',
        key: 'service_ratio',
        render: (value: number) => `${value}%`, // Thêm ký hiệu %
    },
    {
        dataIndex: 'service_level',
        title: 'Level',
        key: 'service_level',
    },
    {
        dataIndex: 'service_status',
        title: 'Status',
        key: 'service_status',
        render: (value: number) =>
            value === 1 ? 'ACTIVE' : value === 2 ? 'BLOCKED' : 'REMOVED', // Hiển thị trạng thái
    },
    {
        dataIndex: 'totalQuantity',
        title: 'Quantity',
        key: 'totalQuantity',
    },
    {
        dataIndex: 'totalCountOfServiceUsage',
        title: 'Usage',
        key: 'totalCountOfServiceUsage',
    },
    {
        dataIndex: 'totalMoney',
        title: 'Revenue',
        key: 'totalMoney',
        render: (value: number) => formatCurrency(value), // Định dạng tiền tệ
    },
];
