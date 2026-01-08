import { NextRequest, NextResponse } from 'next/server';
import { _projectToken, _reduxAuthStorage } from './config/keys.constants';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const _myExpense = request.cookies.get(process.env.NEXT_APP_TOKEN_NAME!)?.name;

  // ============================================
  // 🔐 AUTHENTICATION & ROLE VALIDATION
  // ============================================

  const cookiesToDelete = [_projectToken, _reduxAuthStorage];

  const clearCookiesAndRedirect = () => {
    const redirectPath = request.nextUrl.pathname + request.nextUrl.search;
    const signInUrl = new URL('/auth/login', request.url);
    signInUrl.searchParams.set('redirect', redirectPath);
    const response = NextResponse.redirect(signInUrl);
    cookiesToDelete.forEach(cookieName => {
      response.cookies.set(cookieName, '', {
        expires: new Date(0),
        path: '/',
      });
    });
    return response;
  };
  if (!_myExpense) {
    return clearCookiesAndRedirect();
  }

  if (pathname === '/') {
    const dashboardUrl = request.nextUrl.clone();
    dashboardUrl.pathname = '/auth/login';
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard/:path*'],
};
