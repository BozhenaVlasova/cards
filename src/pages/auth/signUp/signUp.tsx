import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './signUp.module.scss'

import { Button, Card, ControlledInput, Typography } from '@/components/ui'

const registrationSchema = z
  .object({
    email: z.string({ required_error: 'Email is required' }).email('Not a valid email').email(),
    password: z
      .string({ required_error: 'Password is required' })
      .min(3, { message: 'Must be 3 or more characters long' }),
    confirmPassword: z
      .string({ required_error: 'Confirm password is required' })
      .min(3, { message: 'Must be 3 or more characters long' }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

type FormValues = z.infer<typeof registrationSchema>

export const SignUp = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(registrationSchema),
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
            Sign Up
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
                errorMessage={errors.email?.message}
                control={control}
              />
              <ControlledInput
                label="Confirm Password"
                placeholder="Confirm Password"
                type="password"
                {...register('confirmPassword')}
                errorMessage={errors.email?.message}
                control={control}
              />
            </div>
            <div className={s.sendButton}>
              <Button variant="primary" fullWidth>
                <Typography variant="subtitle2">Sign Up</Typography>
              </Button>
            </div>
          </form>
          <Typography variant="body2" className={s.text}>
            Already have an account?
          </Typography>
          <Button variant="link">Sign In</Button>
        </div>
      </Card>
    </>
  )
}
