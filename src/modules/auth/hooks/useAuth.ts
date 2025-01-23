import { ROUTES } from '@/constants/route';
import { userQueryKeys } from '@/modules/user/constants';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Cookies from 'universal-cookie';
import { authApi } from '../apis';
import { LoginPayload } from '../types';
export default function useAuth() {
    const cookies = new Cookies();
    const router = useRouter();
    const { data, refetch } = useQuery({
        queryKey: userQueryKeys.getInfor,
        queryFn: () => authApi.getInfo(),
        retry: false,
        enabled: false,
    });

    const profile = data;

    async function login(payload: LoginPayload) {
        try {
            const response = await authApi.login(payload);
            const { token, refresh_token } = response.data;
            cookies.set('at', token, {
                secure: false,
                sameSite: 'strict',
                maxAge: 60 * 60 * 24,
            }); // Lưu access token (expires sau 1 ngày)
            cookies.set('rt', refresh_token, {
                secure: false,
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 7,
            }); // Lưu refresh token (expires sau 7 ngày)
            await refetch();
            router.push(ROUTES.STATISTIC);
            return '';
        } catch (error: any) {
            return error?.response.data.message;
        }
    }

    function logout() {
        const url = ROUTES.LOGIN;
        router.push(url);
    }

    return {
        data: profile,
        logout,
        login,
    };
}
