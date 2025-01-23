import { STATUS } from '@/enums/common';
import { formatCurrency } from '@/helper';
import { useFilter } from '@/hooks/useFilter';
import { ServiceStatistic } from '@/modules/Dashboard/types';
import { Box, Paper, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useMemo } from 'react';
import { columns, defaultFilterParam, LIMIT_DEFAULT } from '../constants';
import { useFetchServiceStatistic } from '../hooks/useFetchServiceStatistic';
import AppSearch from './AppSearch';
import DateFilter from './DateFilter';
import ProviderFilter from './ProviderFilter';

export default function DataTable() {
    const { dataFilter, onSearch, onChangeFilter, onChangePage } =
        useFilter(defaultFilterParam);
    const { data, isFetching } = useFetchServiceStatistic(dataFilter);

    const rows = useMemo(() => {
        return (
            data?.data?.map((item: ServiceStatistic, index: number) => ({
                ordinalNumber: index + 1,
                id: item.service_id,
                services: item.service_name,
                category: item.categories_name,
                provider: item.provider_name,
                undiscountedPrice: formatCurrency(
                    Number(item.service_initial_rate)
                ),
                ratePer1000Original: formatCurrency(Number(item.service_rate)),
                ratio: item.service_ratio + '%',
                level: item.service_level,
                status:
                    item.service_status === 1
                        ? STATUS.ACTIVE
                        : item.service_status === 2
                          ? STATUS.BLOCKED
                          : STATUS.REMOVED,
                quantity: item.totalQuantity,
                usage: item.totalCountOfServiceUsage,
                revenue: formatCurrency(item.totalMoney),
            })) || []
        );
    }, [data]);

    const handleChangePage = (e: any) => {
        const offset = e.page * e.pageSize;
        const limit = LIMIT_DEFAULT;
        onChangePage(offset, limit);
    };

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
            <Paper sx={{ borderRadius: '.5rem' }}>
                <Box display={'flex'} p={'1.5rem 2rem'} gap={3}>
                    <Typography variant="h6">
                        Revenue:{formatCurrency(data.totalMoneySum)}
                    </Typography>
                    <Typography variant="h6">
                        Cost:{formatCurrency(data.totalInitialMoneySum)}
                    </Typography>
                    <Typography variant="h6">
                        Profit:
                        {formatCurrency(
                            data.totalMoneySum - data.totalInitialMoneySum
                        )}
                    </Typography>
                </Box>
                <DataGrid
                    onPaginationModelChange={handleChangePage}
                    loading={isFetching}
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10, 20]}
                    sx={{ border: 0, borderRadius: '.5rem' }}
                />
            </Paper>
            {/* <Box display={'flex'} justifyContent={'center'} margin={'1rem 0'}>
                <PageTable onChangePage={onChangePage} limit={LIMIT_DEFAULT} />
            </Box> */}
        </Box>
    );
}
