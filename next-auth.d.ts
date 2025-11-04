import { Session } from 'next-auth';
import NextAuth from "next-auth";


declare global {
  interface Window {
    __NEXTAUTH_SESSION__?: Promise<Session | null>;
  }
}


declare module "next-auth" {
  interface Session {
    accessToken?: string;
    refreshToken?: string;
  }
}
