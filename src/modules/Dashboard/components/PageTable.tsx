import { UseFilterProps } from '@/hooks/useFilter';
import { Pagination } from '@mui/material';
import { ChangeEvent } from 'react';
import { DataFilterParams } from '../types';

type ProviderFilterProps = Pick<
    UseFilterProps<DataFilterParams>,
    'onChangePage'
> & {
    limit: number;
};

export default function PageTable({
    onChangePage,
    limit,
}: ProviderFilterProps) {
    const handleChangePage = (e: ChangeEvent<unknown>, page: number) => {
        const offset = (page - 1) * limit;
        onChangePage(offset, offset + 20);
    };
    return (
        <Pagination
            count={10}
            variant="outlined"
            color="primary"
            shape="rounded"
            onChange={handleChangePage}
        />
    );
}
