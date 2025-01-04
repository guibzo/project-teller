import { z } from 'zod'

const envSchema = z.object({
  FIREBASE_PROJECT_ID: z.string(),
  FIREBASE_CLIENT_EMAIL: z.string(),
  FIREBASE_PRIVATE_KEY: z.string(),
  FIREBASE_STORAGE_BUCKET: z.string(),
})

const parsedEnv = envSchema.safeParse(process.env)

if (parsedEnv.success === false) {
  console.error('❌ Invalid environment variables:', parsedEnv.error.format())

  throw new Error('❌ Invalid environment variables!')
}

export const env = parsedEnv.data
