import { OnSearchType } from '@/hooks/useFilter';
import { TextFieldProps } from '@mui/material';
import { Input } from 'antd';
import _ from 'lodash';
type Props = {
    value: string;
    onChange?: OnSearchType;
    delay?: number;
} & TextFieldProps;

export default function AppSearch({
    value,
    onChange = () => {},
    delay = 300,
}: Props) {
    const debounceSearchChange = _.debounce(onChange, delay);

    return (
        <Input
            placeholder="Enter search"
            defaultValue={value}
            onChange={(e) => debounceSearchChange(e)}
            allowClear
            style={{ width: '200px' }}
        />
    );
}
