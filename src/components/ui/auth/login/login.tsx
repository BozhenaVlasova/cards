import { Button } from '../../button'
import { Card } from '../../card/card'
import { CheckBox } from '../../checkbox/checkbox'
import { Input } from '../../input/input'
import { Typography } from '../../typography/typography'

import s from './login.module.scss'

export const Login = () => {
  return (
    <Card>
      <div className={s.content}>
        <Typography variant="large" className={s.title}>
          Sign In
        </Typography>
        <Input label="Email" name="email" placeholder="Email" type="email" className={s.input} />
        <Input
          label="Password"
          name="password"
          placeholder="Password"
          type="password"
          className={s.input}
        />
        <CheckBox label="Remember me" />
        <Typography variant="body2" className={s.text}>
          Forgot Password?
        </Typography>
        <Button variant="primary" fullWidth={true} className={s.sendButton}>
          Sign In
        </Button>
        <Typography variant="body2" className={s.questionText}>
          Don`t have an account?
        </Typography>
        <Button variant="link">Sign Up</Button>
      </div>
    </Card>
  )
}
