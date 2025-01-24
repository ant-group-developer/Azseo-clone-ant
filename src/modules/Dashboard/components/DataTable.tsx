import { formatCurrency } from '@/helper';
import { useFilter } from '@/hooks/useFilter';
import { ServiceStatistic } from '@/modules/Dashboard/types';
import { Box } from '@mui/material';
import { Table } from 'antd';
import Title from 'antd/es/typography/Title';
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
                service_id: item.service_id,
                service_service: '', // Nếu không có giá trị, hãy để trống hoặc bổ sung từ dữ liệu khác
                service_name: item.service_name,
                service_type: '', // Tương tự, cung cấp giá trị nếu có
                service_ratio: item.service_ratio,
                service_rate: item.service_rate,
                service_initial_rate: item.service_initial_rate,
                service_status: item.service_status,
                service_min: '', // Bổ sung giá trị nếu có trong nguồn dữ liệu
                service_max: '',
                service_dripfeed: '',
                service_refill: '',
                service_cancel: '',
                service_level: item.service_level,
                service_description_en: '', // Mô tả (nếu không có, hãy để trống)
                serviceCategories_id: 0, // Nếu không có trong `rawData`, hãy gán giá trị mặc định
                categories_id: item.categories_id,
                categories_name: item.categories_name,
                provider_id: item.provider_id,
                provider_name: item.provider_name,
                provider_link: item.provider_link,
                provider_status: item.provider_status,
                provider_createAt: item.provider_createAt,
                provider_updatedAt: item.provider_updatedAt,
                totalMoney: item.totalMoney,
                totalInitialMoney: item.totalInitialMoney,
                totalQuantity: item.totalQuantity,
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
                    style={{ gap: '2rem', padding: '1rem 2rem' }}
                >
                    <Title level={5} style={{ margin: 0 }}>
                        Revenue:{formatCurrency(data.totalMoneySum)}
                    </Title>
                    <Title level={5} style={{ margin: 0 }}>
                        Cost:{formatCurrency(data.totalInitialMoneySum)}
                    </Title>
                    <Title level={5} style={{ margin: 0 }}>
                        Profit:
                        {formatCurrency(
                            data.totalMoneySum - data.totalInitialMoneySum
                        )}
                    </Title>
                </div>
                <Table
                    // onPaginationModelChange={handleChangePage}
                    loading={isFetching}
                    pagination={{
                        position: ['bottomCenter'],
                    }}
                    dataSource={rows}
                    columns={columns}
                    // initialState={{
                    //     pagination: {
                    //         paginationModel: { page: 0, pageSize: 5 },
                    //     },
                    // }}
                    // pageSizeOptions={[5, 10, 20]}
                    // sx={{ border: 0, borderRadius: '.5rem' }}
                />
            </div>
            {/* <Box display={'flex'} justifyContent={'center'} margin={'1rem 0'}>
                <PageTable onChangePage={onChangePage} limit={LIMIT_DEFAULT} />
            </Box> */}
        </Box>
    );
}
