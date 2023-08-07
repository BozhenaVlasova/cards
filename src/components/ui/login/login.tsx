import { Button } from '../button'
import { Card } from '../card/card'
import { CheckBox } from '../checkbox/checkbox'
import { Input } from '../input/input'
import { Typography } from '../typography/typography'

import s from './login.module.scss'

export const Login = () => {
  return (
    <Card>
      <div className={s.login}>
        <Typography variant="large" className={s.title}>
          Sign In
        </Typography>
        <Input label="Email" name="email" placeholder="Email" type="email" />
        <Input label="Password" name="password" placeholder="Password" type="password" />
        <CheckBox label="Remember me" />
        <Typography variant="body2" className={s.forgot}>
          Forgot Password?
        </Typography>
        <Button variant="primary" fullWidth={true} className={s.signIn}>
          Sign In
        </Button>
        <Typography variant="body2" className={s.text}>
          Don`t have an account?
        </Typography>
        <Button variant="link">Sign Up</Button>
      </div>
    </Card>
  )
}
