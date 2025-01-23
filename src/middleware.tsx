import { NextRequest, NextResponse } from 'next/server';
import { COOKIES_KEY } from './constants';

export async function middleware(request: NextRequest) {
    const newResponse = NextResponse.next();

    const bearerToken = request.cookies.get(COOKIES_KEY.TOKEN)?.value;
    newResponse.headers.set('Authorization', 'Bearer ' + bearerToken);

    return newResponse;
}

export const config = {
    matcher: [
        // Skip all paths that should not be internationalized
        '/((?!_next|.*\\..*).*)',

        // Necessary for base path to work
        '/',
    ],
};
