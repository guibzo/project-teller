'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/firebase'
import { Timestamp } from 'firebase-admin/firestore'
import { verifyIfLinkIsTaken } from './verify-if-link-is-taken'

export const createProfile = async (link: string) => {
  const session = await auth()
  if (!session?.user) throw new Error('Usuário não autenticado')

  const isLinkTaken = await verifyIfLinkIsTaken(link)
  if (isLinkTaken) throw new Error('Este link já está em uso')

  try {
    await db.collection('profiles').doc(link).set({
      userId: session.user.id,
      totalVisits: 0,
      createdAt: Timestamp.now().toMillis(),
    })
  } catch (err: any) {
    console.error(err)
    throw new Error(err)
  }
}
