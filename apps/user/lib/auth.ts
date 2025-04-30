import db from "@repo/prisma/clinet";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { NextAuthOptions, User , Session } from "next-auth";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: {
          label: "Name",
          type: "text",
          placeholder: "Enter your name",
        },
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      authorize: async (
        credentials: Record<"name" | "email" | "password", string> | undefined,
        req
      ): Promise<User | null> => {
        // 1. If no credentials, bail out early
        if (!credentials) return null;

        const { name, email, password } = credentials;
        const callbackUrl = String(
          req.query?.callbackUrl || req.headers?.referer || ""
        );
        const basePath = callbackUrl.split("?")[0];

        // 2. Look for an existing user
        const existing = await db.user.findFirst({ where: { email } });

        // 3. SIGNUP FLOW
        if (basePath === "http://localhost:3000/signup") {
          if (!name || !email || !password) {
            throw new Error("blank"); // missing fields
          }
          if (existing) {
            throw new Error("email"); // user already exists
          }

          // create user + balance
          const hashed = await bcrypt.hash(password, 10);
          const newUser = await db.user.create({
            data: { name, email, password: hashed },
          });
          await db.balance.create({
            data: { userId: newUser.id, amount: 0, locked: 0 },
          });

          // wrap Prisma user in NextAuth User shape
          return {
            id: newUser.id.toString(),
            name: newUser.name,
            email: newUser.email!,
          };
        }

        // 4. SIGNIN FLOW
        if (basePath === "http://localhost:3000/signin") {
          if (!existing) throw new Error("not match");

          const isMatch = await bcrypt.compare(password, existing.password);
          if (!isMatch) throw new Error("password mismatch");

          return {
            id: existing.id.toString(),
            name: existing.name,
            email: existing.email!,
          };
        }

        // 5. Fallback: no match
        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) session.user.id = token.id as string;
      return session;
    },
  },

  secret: process.env.JWT_SECRET,
  pages: { signIn: "/signin" },
};
