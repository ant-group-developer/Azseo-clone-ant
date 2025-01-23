import { fetchInfoOrderMoney } from '@/modules/Dashboard/apis';
import { useQuery } from '@tanstack/react-query';
import { inForOrderMoneyData, InForOrderMoneyResponse } from '../types';

export const useFetchInforOrderMoney = () => {
    const { data, ...restReponse } = useQuery({
        queryKey: ['InforOrderMoney'],
        queryFn: fetchInfoOrderMoney,
    });

    const defaultData: InForOrderMoneyResponse<inForOrderMoneyData> = {
        data: {
            fundsPresent: 0,
            orderProgress: 0,
            totalMoney: 0,
            totalOrderFinish: 0,
        },
        message: '',
    };

    const dataInforOrderMoney = data?.data ?? defaultData;

    return {
        data: dataInforOrderMoney,
        ...restReponse,
    };
};
