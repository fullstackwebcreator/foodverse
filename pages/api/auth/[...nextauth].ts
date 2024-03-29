import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: `${process.env.NEXT_GITHUB_ID}`,
      clientSecret: `${process.env.NEXT_GITHUB_SECRET}`,
    }),
  ],
  secret: `${process.env.NEXT_PUBLIC_SECRET}`,
  theme: {
    colorScheme: "dark",
  },
}

export default NextAuth(authOptions)
