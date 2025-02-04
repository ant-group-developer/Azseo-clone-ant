import { UseFilterProps } from '@/hooks/useFilter';
import { PROVIDER_NAME } from '@/modules/Platform/enums';
import { SelectProps } from '@mui/material';
import { Select } from 'antd';
import { DataFilterParams } from '../types';

type ProviderFilterProps = Pick<
    UseFilterProps<DataFilterParams>,
    'onChangeFilter'
> &
    SelectProps<string> & {};

export default function ProviderFilter({
    onChangeFilter,
    value,
}: ProviderFilterProps) {
    const handleChange = (value: string) => {
        onChangeFilter({ providerId: Number(value) });
    };

    const clearSelection = () => {
        onChangeFilter({ providerId: undefined });
    };

    return (
        <Select
            defaultValue={
                value == '1'
                    ? PROVIDER_NAME.GAINSMM
                    : value == '2'
                      ? PROVIDER_NAME.VIRALSM
                      : null
            }
            onChange={handleChange}
            onClear={clearSelection}
            placeholder="Select Provider"
            allowClear
            style={{ minWidth: 200 }}
            options={[
                { label: 'Gainsmm', value: 1 },
                { label: 'Viralsmm', value: 2 },
            ]}
        />
    );
}
