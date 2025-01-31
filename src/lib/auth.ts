import { FirestoreAdapter } from '@auth/firebase-adapter'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { firebaseCert } from './firebase'

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: FirestoreAdapter({
    credential: firebaseCert,
  }),
  providers: [GoogleProvider({})],
})
