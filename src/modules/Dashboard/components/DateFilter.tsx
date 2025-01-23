import { UseFilterProps } from '@/hooks/useFilter';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
    FormControl,
    IconButton,
    ListSubheader,
    MenuItem,
    Select,
    SelectChangeEvent,
    SelectProps,
} from '@mui/material';
import dayjs from 'dayjs';
import { X } from 'lucide-react';
import { useState } from 'react';
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

export default function DateFilter({
    onChangeFilter,
    ...props
}: DateFilterProps) {
    const [hovering, setHovering] = useState<boolean>(false);
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

    const handleChange = (event: SelectChangeEvent<string>) => {
        const value = event.target.value as string;
        const [startDate, endDate] = JSON.parse(value);
        onChangeFilter({ startDate, endDate });
    };

    const clearSelection = () => {
        onChangeFilter({ startDate: '', endDate: '' });
    };

    return (
        <FormControl sx={{ minWidth: 200 }}>
            <Select
                {...props}
                size="small"
                sx={{ bgcolor: 'white' }}
                onChange={handleChange}
                displayEmpty
                IconComponent={() => (
                    <IconButton
                        onMouseEnter={() => setHovering(true)}
                        onMouseLeave={() => setHovering(false)}
                        onClick={clearSelection}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            right: 8,
                            transform: 'translateY(-50%)',
                            zIndex: 1,
                        }}
                    >
                        {hovering ? <X /> : <ArrowDropDownIcon />}
                    </IconButton>
                )}
            >
                <MenuItem value="" disabled>
                    <span>Select Date</span>
                </MenuItem>
                <ListSubheader sx={{ fontWeight: 'bold' }}>
                    Last 6 Months
                </ListSubheader>
                {lastSixMonths.map((month, index) => (
                    <MenuItem key={`month-${index}`} value={month.value}>
                        {month.label}
                    </MenuItem>
                ))}
                <ListSubheader sx={{ fontWeight: 'bold' }}>
                    Last 3 Years
                </ListSubheader>
                {lastThreeYears.map((year, index) => (
                    <MenuItem key={`year-${index}`} value={year.value}>
                        {year.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
