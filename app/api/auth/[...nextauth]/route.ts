import connectMongoDB from "@/app/lib/mongodb";
import User from "@/app/models/user";
import NextAuth, { AuthOptions } from "next-auth";
import bcrypt from "bcryptjs";

import CredentialsProvider from "next-auth/providers/credentials"
import { Poltawski_Nowy } from "next/font/google";

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials: any) {
        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null
          }

          return user;
        } catch (error) {
          console.log("Error: ", error)
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
