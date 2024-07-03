import { http } from "@/lib/axios";
import { Session } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

interface CustomSession extends Session {
  authToken?: string;
  user_id?: string;
  email?: string;
}

const login = async (credentials: any) => {
  try {
    const token = await http.post("/auth/login", credentials);
    if (token.status === 200) {
      const user = await http.get("/user", {
        headers: {
          "x-auth-token": token.data.token,
        },
      });

      return {
        ...user.data.user,
        token: token.data.token,
      };
    }
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

const googleLogin = async (idToken: string) => {
  try {
    const response = await http.post("/auth/login/google", {
      id_token: idToken,
    });
    if (response.status === 200) {
      const user = await http.get("/user", {
        headers: {
          "x-auth-token": response.data.token,
        },
      });

      return {
        ...user.data.user,
        token: response.data.token,
      };
    }
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

const handler = NextAuth({
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          console.log(err);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({
      token,
      user,
      account,
    }: {
      token: any;
      user: any;
      account: any;
    }) {
      if (user) {
        if (account?.provider === "credentials") {
          token.user_id = user._id;
          token.email = user.email;
          token.name = `${user.firstName} ${user.lastName}`;
          token.authToken = user.token;
        } else if (account?.provider === "google") {
          const user = await googleLogin(account.id_token);
          token.user_id = user._id;
          token.email = user.email;
          token.name = `${user.firstName} ${user.lastName}`;
          token.authToken = user.token;
        }
      }
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: CustomSession;
      user: any;
      token: any;
    }) {
      session.authToken = token?.authToken || null;
      session.user_id = token?.user_id || null;
      session.email = token?.email || null;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
