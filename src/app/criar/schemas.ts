import { sanitizeString } from '@/utils/sanitize-string'
import { z } from 'zod'

const createProfileErrorMessages: { [key: string]: string } = {
  MIN_CHARACTERS: 'Insira ao menos 3 caracteres',
}

export const createProfileSchema = z.object({
  link: z
    .string({ required_error: createProfileErrorMessages['MIN_CHARACTERS'] })
    .min(3, createProfileErrorMessages['MIN_CHARACTERS'])
    .transform((link) => {
      return sanitizeString(link)
    }),
})

export type CreateProfileSchema = z.infer<typeof createProfileSchema>
