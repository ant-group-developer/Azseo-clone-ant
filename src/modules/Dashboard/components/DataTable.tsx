import { STATUS } from '@/enums/common';
import { formatCurrency } from '@/helper';
import { useFilter } from '@/hooks/useFilter';
import { ServiceStatistic } from '@/modules/Dashboard/types';
import { Box } from '@mui/material';
import { Table, Tag } from 'antd';
import Title from 'antd/es/typography/Title';
import Image from 'next/image';
import { useMemo } from 'react';
import { columns, defaultFilterParam } from '../constants';
import { useFetchServiceStatistic } from '../hooks/useFetchServiceStatistic';
import AppSearch from './AppSearch';
import DateFilter from './DateFilter';
import ProviderFilter from './ProviderFilter';

export default function DataTable() {
    const { dataFilter, onSearch, onChangeFilter } =
        useFilter(defaultFilterParam);
    const { data, isFetching } = useFetchServiceStatistic(dataFilter);

    const rows: ServiceStatistic[] = useMemo(() => {
        return (
            data?.data?.map((item: ServiceStatistic) => ({
                key: item.service_id,
                service_id: item.service_id,
                service_service: '',
                service_name: item.service_name,
                service_type: '',
                service_ratio: Number(`1${item.service_ratio}`),
                service_rate: item.service_rate,
                service_initial_rate: item.service_initial_rate,
                service_status: (
                    <Tag
                        style={{ fontSize: '14px' }}
                        color={
                            item.service_status === 1
                                ? 'green'
                                : item.service_status === 2
                                  ? 'red'
                                  : 'yellow'
                        }
                        bordered={false}
                    >
                        {item.service_status === 1
                            ? STATUS.ACTIVE
                            : item.service_status === 2
                              ? STATUS.BLOCKED
                              : STATUS.REMOVED}
                    </Tag>
                ),
                service_min: '',
                service_max: '',
                service_dripfeed: '',
                service_refill: '',
                service_cancel: '',
                service_level: (
                    <span className="flex items-center justify-between gap-1">
                        {item.service_level}
                        <Image
                            src="/star.png"
                            alt="star"
                            width={14}
                            height={14}
                        />
                    </span>
                ),
                service_description_en: '',
                serviceCategories_id: 0,
                categories_id: item.categories_id,
                categories_name: item.categories_name,
                provider_id: item.provider_id,
                provider_name: (
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.provider_link}
                    >
                        {item.provider_name}
                    </a>
                ),
                provider_link: item.provider_link,
                provider_status: item.provider_status,
                provider_createAt: item.provider_createAt,
                provider_updatedAt: item.provider_updatedAt,
                totalMoney: item.totalMoney,
                totalInitialMoney: item.totalInitialMoney,
                totalQuantity: item.totalQuantity || 0,
                totalCountOfServiceUsage: item.totalCountOfServiceUsage,
            })) || []
        );
    }, [data]);

    // const handleChangePage = (e: any) => {
    //     const offset = e.page * e.pageSize;
    //     const limit = LIMIT_DEFAULT;
    //     onChangePage(offset, limit);
    // };

    return (
        <Box>
            <Box margin={'2rem 0'} width={'100%'} display={'flex'} gap={'1rem'}>
                <AppSearch
                    value={dataFilter.keyword || ''}
                    onChange={onSearch}
                />
                <DateFilter
                    value={
                        (dataFilter.startDate &&
                            dataFilter.endDate &&
                            JSON.stringify([
                                dataFilter.startDate,
                                dataFilter.endDate,
                            ])) ||
                        ''
                    }
                    onChangeFilter={onChangeFilter}
                />
                <ProviderFilter
                    value={dataFilter.providerId?.toString()}
                    onChangeFilter={onChangeFilter}
                />
            </Box>
            <div className="border-#ccc rounded-lg border">
                <div
                    className="flex w-full items-center"
                    style={{
                        gap: '2rem',
                        padding: '1rem 2rem',
                    }}
                >
                    <Title
                        level={5}
                        style={{ margin: 0, color: 'var(--title-color)' }}
                    >
                        Revenue:{formatCurrency(data.totalMoneySum)}
                    </Title>
                    <Title
                        level={5}
                        style={{ margin: 0, color: 'var(--title-color)' }}
                    >
                        Cost:{formatCurrency(data.totalInitialMoneySum)}
                    </Title>
                    <Title
                        level={5}
                        style={{ margin: 0, color: 'var(--title-color)' }}
                    >
                        Profit:
                        {formatCurrency(
                            data.totalMoneySum - data.totalInitialMoneySum
                        )}
                    </Title>
                </div>
                <Table
                    loading={isFetching}
                    pagination={{
                        position: ['bottomCenter'],
                    }}
                    dataSource={rows}
                    columns={columns}
                />
            </div>
            {/* <Box display={'flex'} justifyContent={'center'} margin={'1rem 0'}>
                <PageTable onChangePage={onChangePage} limit={LIMIT_DEFAULT} />
            </Box> */}
        </Box>
    );
}
