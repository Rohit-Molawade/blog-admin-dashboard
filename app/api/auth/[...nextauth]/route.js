import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "youremail@example.com",
        },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials) {
        const response = await fetch("http://localhost:3001/api/admin/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
          cache: 'no-store'
        });

        const data = await response.json();

        if (data.error) {
          return null;
        }

        return Promise.resolve(data);
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user?.token) {
        token.user = user.user;
        token.access_token = user.token;
      }

      return Promise.resolve(token);
    },

    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.user = token.user;
      session.user.token = token.access_token;
      return Promise.resolve(session);
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60,
  }
});

export { handler as GET, handler as POST };
