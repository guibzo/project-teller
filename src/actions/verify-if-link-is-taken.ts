'use server'

import { db } from '@/lib/firebase'

export const verifyIfLinkIsTaken = async (link: string) => {
  const snapshot = await db.collection('profiles').doc(link).get()

  return snapshot.exists
}
