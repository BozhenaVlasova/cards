import { Button } from '../../button'
import { Card } from '../../card/card'
import { Input } from '../../input/input'
import { Typography } from '../../typography/typography'

import s from './forgotPassword.module.scss'

export const ForgotPassword = () => {
  return (
    <Card>
      <div className={s.content}>
        <Typography variant="large" className={s.title}>
          Forgot your password?
        </Typography>
        <Input
          label="Email"
          name="email"
          placeholder="Email"
          type="email"
          onChange={() => {}}
          value={''}
        />
        <Typography variant="body2" className={s.text}>
          Enter your email address and we will send you further instructions
        </Typography>
        <div className={s.sendButton}>
          <Button variant="primary" fullWidth>
            <Typography variant="subtitle2">Send Insrtuctions</Typography>
          </Button>
        </div>
        <Typography variant="body2" className={s.questionText}>
          Did you remember your password?
        </Typography>
        <Button variant="link">Try logging in</Button>
      </div>
    </Card>
  )
}
