import { LOCALE } from '@/enums/common';
import { GridColDef } from '@mui/x-data-grid';
import { DataFilterParams } from '../types';

export const OFFSET_DEFAULT = 0;
export const LIMIT_DEFAULT = 80;
export const defaultFilterParam: DataFilterParams = {
    language: LOCALE.EN,
    // offset: OFFSET_DEFAULT,
    // limit: LIMIT_DEFAULT,
};

export const columns: GridColDef[] = [
    {
        field: 'ordinalNumber',
        headerName: 'No.',
        sortable: false,
        disableColumnMenu: true,
        flex: 0.5,
    },
    {
        field: 'id',
        headerName: 'ID',
        sortable: false,
        disableColumnMenu: true,
        flex: 0.5,
    },
    {
        field: 'services',
        headerName: 'Services',
        sortable: false,
        disableColumnMenu: true,
        flex: 2,
    },
    {
        field: 'category',
        headerName: 'Category',
        sortable: false,
        disableColumnMenu: true,
        flex: 1,
    },
    {
        field: 'provider',
        headerName: 'Provider',
        sortable: false,
        disableColumnMenu: true,
        flex: 1,
    },
    {
        field: 'undiscountedPrice',
        headerName: 'Undiscounted Price',
        sortable: false,
        disableColumnMenu: true,
        flex: 1,
    },
    {
        field: 'ratePer1000Original',
        headerName: 'Rate Per 1000 Original',
        sortable: false,
        disableColumnMenu: true,
        flex: 1,
    },
    {
        field: 'ratio',
        headerName: 'Ratio',
        sortable: false,
        disableColumnMenu: true,
        flex: 1,
    },
    {
        field: 'level',
        headerName: 'Level',
        sortable: false,
        disableColumnMenu: true,
        flex: 1,
    },
    {
        field: 'status',
        headerName: 'Status',
        sortable: false,
        disableColumnMenu: true,
        flex: 1,
    },
    {
        field: 'quantity',
        headerName: 'Quantity',
        disableColumnMenu: true,
        flex: 1,
    },
    {
        field: 'usage',
        headerName: 'Usage',
        disableColumnMenu: true,
        flex: 1,
    },
    {
        field: 'revenue',
        headerName: 'Revenue',
        disableColumnMenu: true,
        flex: 1,
    },
];
