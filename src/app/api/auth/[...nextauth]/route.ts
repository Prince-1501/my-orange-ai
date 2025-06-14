import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import GoogleProvider from 'next-auth/providers/google';
import clientPromise from '@/lib/mongodb';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async session({ session, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      };
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
});

export { handler as GET, handler as POST }; 