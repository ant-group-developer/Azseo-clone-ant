import dayjs from 'dayjs';

export const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 1,
        maximumFractionDigits: 3,
    }).format(value);
};

export const formatDate = (
    dateString: string,
    format: string = 'DD/MM/YYYY'
) => {
    return dayjs(dateString).format(format);
};
