import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './forgotPassword.module.scss'

import { Button, Card, ControlledInput, Typography } from '@/components/ui'

const emailSchema = z.object({
  email: z.string({ required_error: 'Email is required' }).email(),
})

type FormValues = z.infer<typeof emailSchema>

export const ForgotPassword = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(emailSchema),
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
            Forgot your password?
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'contents' }}>
            <ControlledInput
              label="Email"
              placeholder="Email"
              type="email"
              {...register('email')}
              errorMessage={errors.email?.message}
              control={control}
            />
            <Typography variant="body2" className={s.text}>
              Enter your email address and we will send you further instructions
            </Typography>
            <div className={s.sendButton}>
              <Button variant="primary" fullWidth>
                <Typography variant="subtitle2">Send Insrtuctions</Typography>
              </Button>
            </div>
          </form>
          <Typography variant="body2" className={s.questionText}>
            Did you remember your password?
          </Typography>
          <Button variant="link">Try logging in</Button>
        </div>
      </Card>
    </>
  )
}
