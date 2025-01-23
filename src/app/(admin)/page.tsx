import { COOKIES_KEY } from '@/constants';
import { HOME_ROUTE, ROUTES } from '@/constants/route';
import { redirect } from 'next/navigation';
import Cookies from 'universal-cookie';

export default function Admin() {
    const cookies = new Cookies();
    const value = cookies.get(COOKIES_KEY.TOKEN)?.value;

    if (value) {
        redirect(HOME_ROUTE);
    } else {
        redirect(ROUTES.LOGIN);
    }
}
