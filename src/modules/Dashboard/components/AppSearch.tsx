import { OnSearchType } from '@/hooks/useFilter';
import ClearIcon from '@mui/icons-material/Clear';
import {
    IconButton,
    InputAdornment,
    TextField,
    TextFieldProps,
} from '@mui/material';
import _ from 'lodash';
import { useRef } from 'react';
type Props = {
    value: string;
    onChange?: OnSearchType;
    delay?: number;
} & TextFieldProps;

export default function AppSearch({
    value,
    onChange = () => {},
    delay = 300,
    ...props
}: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const debounceSearchChange = _.debounce(onChange, delay);
    const handleClear = () => {
        if (inputRef.current) {
            inputRef.current.value = '';
        }
        debounceSearchChange({
            target: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>);
    };

    return (
        <TextField
            defaultValue={value}
            inputRef={inputRef}
            onChange={(e) => debounceSearchChange(e)}
            placeholder="Enter search"
            size="small"
            sx={{
                bgcolor: 'white',
                '.MuiOutlinedInput-root': { height: '32px' },
            }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleClear}>
                            <ClearIcon
                                sx={{
                                    visibility: value ? 'visible' : 'hidden',
                                    fontSize: '14px',
                                }}
                            />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            {...props}
        />
    );
}
