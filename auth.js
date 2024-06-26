import NextAuth from "next-auth"
import {getUserById} from "@/actions/user";
import {PrismaAdapter} from "@auth/prisma-adapter";
import {db} from "@/lib/db";
import authConfig from "@/auth.config";

export const {
    auth,
    handlers: {GET, POST},
    signIn,
} = NextAuth({
    callbacks: {
        async signIn({user}) {
            return await getUserById(user.id)
        },
        async session({token, session}) {
            if (token.sub && session.user) {
                session.user.id = token.sub
            }

            if (token.role && session.user) {
                session.user.role = token.role
            }

            if(token.name && session.user) {
                session.user.username = token.name
            }
            return session
        },
        async jwt({token}) {
            if (!token.sub) return token

            const existingUser = await getUserById(token.sub)

            if (!existingUser) return token

            token.role = existingUser.role
            token.name = existingUser.username

            return token
        }
    },
    adapter: PrismaAdapter(db),
    session: {strategy: 'jwt'},
    ...authConfig
})
