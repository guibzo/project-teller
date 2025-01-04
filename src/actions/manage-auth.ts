'use server'

import { auth, signIn, signOut } from '@/lib/auth'

export const manageAuth = async () => {
  const session = await auth()

  if (!session) {
    return await signIn('google', {
      redirectTo: '/criar',
    })
  }

  return await signOut({
    redirectTo: '/',
  })
}
