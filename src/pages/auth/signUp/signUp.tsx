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
          <Input
            label="Confirm Password"
            name="password"
            placeholder="Confirm Password"
            type="password"
            onChange={() => {}}
            value={''}
          />
        </div>
        <div className={s.sendButton}>
          <Button variant="primary" fullWidth>
            <Typography variant="subtitle2">Sign Up</Typography>
          </Button>
        </div>
        <Typography variant="body2" className={s.text}>
          Already have an account?
        </Typography>
        <Button variant="link">Sign In</Button>
      </div>
    </Card>
  )
}
