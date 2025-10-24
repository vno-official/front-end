import { auth } from "@/auth";
import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set("x-current-path", request.nextUrl.pathname);
  await auth(request as never);
  return NextResponse.next({ headers });
}

export const config: MiddlewareConfig = {
  matcher: ["/((?!api|static|favicon.ico|manifest.webmanifest).*)"],
};
