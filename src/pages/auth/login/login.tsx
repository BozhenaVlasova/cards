import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './login.module.scss'

import { Button, Card, ControlledCheckbox, ControlledInput, Typography } from '@/components/ui'

const loginSchema = z.object({
  email: z.string({ required_error: 'Email is required' }).email(),
  password: z
    .string({ required_error: 'Password is required' })
    .min(3, { message: 'Must be 3 or more characters long' }),
  rememberMe: z.boolean().default(false),
})

type FormValues = z.infer<typeof loginSchema>

export const Login = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
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
            Sign In
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'contents' }}>
            <div className={s.input}>
              <ControlledInput
                label="Email"
                placeholder="Email"
                type="email"
                {...register('email')}
                errorMessage={errors.email?.message}
                control={control}
              />
              <ControlledInput
                label="Password"
                placeholder="Password"
                type="password"
                {...register('password')}
                errorMessage={errors.password?.message}
                control={control}
              />
            </div>
            <ControlledCheckbox label={'Remember me'} control={control} name={'rememberMe'} />
            <div className={s.sendButton}>
              <Button type="submit" variant="primary" fullWidth>
                <Typography variant="subtitle2">Sign In</Typography>
              </Button>
            </div>
          </form>
          <Button variant="link" className={s.text}>
            <Typography variant="body2">Forgot Password?</Typography>
          </Button>
          <Typography variant="body2" className={s.questionText}>
            Don`t have an account?
          </Typography>
          <Button variant="link">Sign Up</Button>
        </div>
      </Card>
    </>
  )
}
