import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
export const {
    handlers: {GET, POST},
    auth,
} = NextAuth({
    providers: [
        Google({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
        }),
    ],
})          