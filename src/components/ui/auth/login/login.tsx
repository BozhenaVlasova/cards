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
        <div className={s.input}>
          <Input
            label="Email"
            name="email"
            placeholder="Email"
            type="email"
            onChange={() => {}}
            value={''}
          />
          <Input
            label="Password"
            name="password"
            placeholder="Password"
            type="password"
            onChange={() => {}}
            value={''}
          />
        </div>
        <CheckBox label="Remember me" />
        <Typography variant="body2" className={s.text}>
          Forgot Password?
        </Typography>
        <div className={s.sendButton}>
          <Button variant="primary" fullWidth>
            <Typography variant="subtitle2">Sign In</Typography>
          </Button>
        </div>
        <Typography variant="body2" className={s.questionText}>
          Don`t have an account?
        </Typography>
        <Button variant="link">Sign Up</Button>
      </div>
    </Card>
  )
}
