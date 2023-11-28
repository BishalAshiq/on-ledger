import { NextResponse } from 'next/server'
import { isAuthenticated } from '../utils/auth';
import { parse } from 'cookie';

// Limit the middleware to paths starting with `/api/`
export const config = {
    matcher: '/dashboard',
}

export function middleware(request) {
    // console.log(request.cookies.getAll().length);
    if (request.cookies.getAll().length == 0) {
        return NextResponse.redirect(new URL('/', request.url).toString(), { status: 307 });
    }
    else {
        // console.log(request.cookies.get('refreshToken')?.value);
        if (request.cookies.get('refreshToken')?.value != undefined) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL('/', request.url).toString(), { status: 307 });
        }
    }
}