import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export { default } from 'next-auth/middleware';

// export const config = { matcher: ['/admin/:path*', '/user'] };

export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;

  // 로그인만
  if (!pathname.startsWith('/auth') && !session) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  // 로그인 후 /auth 페이지 접근 금지
  if (pathname.startsWith('/auth') && session) {
    return NextResponse.redirect(new URL('/about', req.url));
  }

  return NextResponse.next();
}
