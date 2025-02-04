import { UseFilterProps } from '@/hooks/useFilter';
import { SelectProps } from '@mui/material';
import { Select } from 'antd';
import dayjs from 'dayjs';
import { DataFilterParams } from '../types';

interface Option {
    label: string;
    value: string;
}

type DateFilterProps = Pick<
    UseFilterProps<DataFilterParams>,
    'onChangeFilter'
> &
    SelectProps<string> & {};

export default function DateFilter({ onChangeFilter, value }: DateFilterProps) {
    // Hàm tạo danh sách 6 tháng gần nhất
    const getLastSixMonths = (): Option[] => {
        const months: Option[] = [];
        for (let i = 0; i < 6; i++) {
            const startOfMonth = dayjs()
                .subtract(i, 'month')
                .startOf('month')
                .toISOString();
            const endOfMonth = dayjs()
                .subtract(i, 'month')
                .endOf('month')
                .toISOString();
            months.push({
                label: dayjs().subtract(i, 'month').format('M/YYYY'),
                value: JSON.stringify([startOfMonth, endOfMonth]),
            });
        }
        return months;
    };

    // Hàm tạo danh sách 3 năm gần nhất
    const getLastThreeYears = (): Option[] => {
        const years: Option[] = [];
        const currentYear = dayjs().year();
        for (let i = 0; i < 3; i++) {
            const year = currentYear - i;
            const startOfYear = dayjs(`${year}-01-01`)
                .startOf('year')
                .toISOString();
            const endOfYear = dayjs(`${year}-12-31`)
                .endOf('year')
                .toISOString();
            years.push({
                label: `${year}`,
                value: JSON.stringify([startOfYear, endOfYear]),
            });
        }
        return years;
    };

    const lastSixMonths = getLastSixMonths();
    const lastThreeYears = getLastThreeYears();

    const handleChange = (value: string) => {
        if (value) {
            const [startDate, endDate] = JSON.parse(value);
            onChangeFilter({ startDate, endDate });
        } else {
            onChangeFilter({ startDate: '', endDate: '' });
        }
    };

    return (
        <Select
            placeholder="Select Date"
            defaultValue={value || null}
            onChange={handleChange}
            options={[
                {
                    label: 'Last 6 Months',
                    title: 'Last 6 Months',
                    options: lastSixMonths,
                },
                {
                    label: 'Last 3 Years',
                    title: 'Last 3 Years',
                    options: lastThreeYears,
                },
            ]}
            style={{ minWidth: 200 }}
            allowClear
        />
    );
}
