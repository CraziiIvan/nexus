import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET || "",
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      return session;
    },

    async signIn({profile}) {
        console.log(profile)
      try {
        return true
      } catch (error) {
        console.error(error)
        return false
      }
    }
  },
});

export { handler as GET, handler as POST };