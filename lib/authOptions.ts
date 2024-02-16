import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { userRepository } from "./user";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Email and Password",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@domain.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const user = await userRepository.findOne({
          email: credentials?.email,
        });

        const comparePassword = await compare(
          credentials?.password as string,
          user.password,
        );

        // Assuming user.password is a hashed password
        if (user && comparePassword) {
          // Return only the essential user information
          return { id: user.id, name: user.name, email: user.email };
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return user ? true : false;
    },
    async session({ session, user, token }) {
      if (user) {
        // Add the user information to the session
        session.user = user;
      }
      return session;
    },
    async jwt({ token, user, account }) {
      if (user) {
        // Add the user information to the JWT token
        token.user = user;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
};
