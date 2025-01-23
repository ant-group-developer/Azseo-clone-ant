import { UseFilterProps } from '@/hooks/useFilter';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
    FormControl,
    IconButton,
    MenuItem,
    Select,
    SelectChangeEvent,
    SelectProps,
} from '@mui/material';
import { X } from 'lucide-react';
import { useState } from 'react';
import { DataFilterParams } from '../types';

type ProviderFilterProps = Pick<
    UseFilterProps<DataFilterParams>,
    'onChangeFilter'
> &
    SelectProps<string> & {};

export default function ProviderFilter({
    value = '',
    onChangeFilter,
    ...props
}: ProviderFilterProps) {
    const [hovering, setHovering] = useState<boolean>(false);

    const handleChange = (event: SelectChangeEvent<string>) => {
        const value = event.target.value as string;
        console.log('🚀 ~ handleChange ~ value:', value);
        onChangeFilter({ providerId: Number(value) });
    };

    const clearSelection = () => {
        onChangeFilter({ providerId: undefined });
    };

    return (
        <FormControl sx={{ minWidth: 200 }}>
            <Select
                value={value}
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
                    <span>Select Provider</span>
                </MenuItem>
                <MenuItem value={1}>
                    <span>Gainsmm</span>
                </MenuItem>
                <MenuItem value={2}>
                    <span>Viralsmm</span>
                </MenuItem>
            </Select>
        </FormControl>
    );
}
