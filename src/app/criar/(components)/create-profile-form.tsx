'use client'

import { createProfile } from '@/actions/create-profile'
import { FormError } from '@/components/form-error'
import { Button } from '@/components/ui/button'
import { CustomToast } from '@/components/ui/custom-toast'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { createProfileSchema, type CreateProfileSchema } from '../schemas'

export const CreateProfileForm = () => {
  const { register, handleSubmit, formState } = useForm<CreateProfileSchema>({
    resolver: zodResolver(createProfileSchema),
  })

  const router = useRouter()

  const handleCreateProfile = async (data: CreateProfileSchema) => {
    try {
      await createProfile(data.link)

      toast(<CustomToast title='Página criada com sucesso!' description=' ' />)

      router.push(`/perfil/${data.link}`)
    } catch (err) {
      console.error(err)
      toast(<CustomToast error={err} type='error' />)
    }
  }

  return (
    <div className='mt-10 flex items-center gap-3'>
      <h4 className='font-medium opacity-80'>projectteller.com/</h4>

      <form
        onSubmit={handleSubmit(handleCreateProfile)}
        className='flex items-center gap-3'
      >
        <div className='relative'>
          <Input
            {...register('link')}
            aria-description='Insira o corpo de um link para seu perfil'
            aria-label='Link'
            placeholder='Seu link'
            className='w-96'
          />

          {formState.errors.link && (
            <FormError className='absolute -bottom-6'>
              {formState.errors.link.message ?? 'dqwijdwqnuidunqw'}
            </FormError>
          )}
        </div>

        <Button type='submit' className='px-10'>
          Criar
        </Button>
      </form>
    </div>
  )
}
