import { Button } from '../../button'
import { Card } from '../../card/card'
import { Input } from '../../input/input'
import { Typography } from '../../typography/typography'

import s from './signUp.module.scss'

export const SignUp = () => {
  return (
    <Card>
      <div className={s.content}>
        <Typography variant="large" className={s.title}>
          Sign Up
        </Typography>
        <Input label="Email" name="email" placeholder="Email" type="email" className={s.input} />
        <Input
          label="Password"
          name="password"
          placeholder="Password"
          type="password"
          className={s.input}
        />
        <Input
          label="Confirm Password"
          name="password"
          placeholder="Confirm Password"
          type="password"
          className={s.input}
        />
        <Button variant="primary" fullWidth={true} className={s.sendButton}>
          Sign Up
        </Button>
        <Typography variant="body2" className={s.text}>
          Already have an account?
        </Typography>
        <Button variant="link">Sign In</Button>
      </div>
    </Card>
  )
}
