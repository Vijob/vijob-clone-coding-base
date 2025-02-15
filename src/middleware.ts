import { NextRequest, NextResponse } from 'next/server';
import { NextURL } from 'next/dist/server/web/next-url';

export function middleware(request: NextRequest): NextResponse {
  if (request.nextUrl.pathname === '/') {
    const url: NextURL = request.nextUrl.clone();
    url.pathname = '/ko/job';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/']
};
