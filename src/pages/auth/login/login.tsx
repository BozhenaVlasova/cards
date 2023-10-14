import { zodResolver } from '@hookform/resolvers/zod'
import { useController, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../../components/ui/button'
import { Card } from '../../../components/ui/card/card'
import { CheckBox } from '../../../components/ui/checkbox/checkbox'
import { Input } from '../../../components/ui/input/input'
import { Typography } from '../../../components/ui/typography/typography'

import s from './login.module.scss'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
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

  const {
    field: { value, onChange },
  } = useController({
    name: 'rememberMe',
    control,
    defaultValue: false,
  })

  return (
    <Card>
      <div className={s.content}>
        <Typography variant="large" className={s.title}>
          Sign In
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'contents' }}>
          <div className={s.input}>
            <Input
              label="Email"
              placeholder="Email"
              type="email"
              reg={register('email')}
              errorMessage={errors.email?.message}
            />
            <Input
              label="Password"
              placeholder="Password"
              type="password"
              reg={register('password')}
              errorMessage={errors.password?.message}
            />
          </div>
          <CheckBox label="Remember me" checked={value} onChange={onChange} />
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
  )
}
