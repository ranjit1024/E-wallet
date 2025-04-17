import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;