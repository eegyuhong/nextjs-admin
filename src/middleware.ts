import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export { default } from 'next-auth/middleware';

// export const config = { matcher: ['/admin/:path*', '/user'] };

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith('/_next') || // exclude Next.js internals
    pathname.startsWith('/api') || //  exclude all API routes
    pathname.startsWith('/static') || // exclude static files
    pathname.includes('.') || // exclude all files in the public folder
    PUBLIC_FILE.test(pathname)
  )
    return NextResponse.next();

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
