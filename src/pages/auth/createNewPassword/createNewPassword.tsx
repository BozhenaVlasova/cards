import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './createNewPassword.module.scss'

import { Button, Card, ControlledInput, Typography } from '@/components/ui'

const passwordSchema = z.object({
  password: z
    .string({ required_error: 'Password is required' })
    .min(3, { message: 'Must be 3 or more characters long' }),
})

type FormValues = z.infer<typeof passwordSchema>

export const CreateNewPassword = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(passwordSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <>
      <DevTool control={control} />
      <Card>
        <div className={s.content}>
          <Typography variant="large" className={s.title}>
            Create new password
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'contents' }}>
            <ControlledInput
              label="Password"
              placeholder="Password"
              type="password"
              {...register('password')}
              errorMessage={errors.password?.message}
              control={control}
            />
            <Typography variant="body2" className={s.text}>
              Create new password and we will send you further instructions to email
            </Typography>
            <div className={s.sendButton}>
              <Button variant="primary" fullWidth>
                <Typography variant="subtitle2">Create New Password</Typography>
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </>
  )
}
