import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.BOOKWISE_CLIENT_ID!,
      clientSecret: process.env.BOOKWISE_CLIENT_SECRET!
    })
  ],
}

export default NextAuth(authOptions)