import { env } from '@/utils/env'
import { cert, getApps, initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { getStorage } from 'firebase-admin/storage'
import 'server-only'

// const decodedKey = Buffer.from(
//   env.FIREBASE_PRIVATE_KEY_BASE64,
//   'base64',
// ).toString('utf-8')

const privateKey = env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') ?? ''

export const firebaseCert = cert({
  projectId: env.FIREBASE_PROJECT_ID,
  clientEmail: env.FIREBASE_CLIENT_EMAIL,
  privateKey,
})

const hasInstanceAlready = Boolean(getApps().length)

if (!hasInstanceAlready) {
  initializeApp({
    storageBucket: env.FIREBASE_STORAGE_BUCKET,
    credential: firebaseCert,
  })
}

export const db = getFirestore()
export const storage = getStorage().bucket()
