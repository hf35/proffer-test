import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions =  {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      
      authorize: async (credentials) => {
        if (!credentials) return null;

        const { email, password } = credentials;
        if (email === "test@test.com" && password === "1234") {
          return { id: "1", name: "Test User", email };
        }
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
}