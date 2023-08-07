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
        <Input label="Email" name="email" placeholder="Email" type="email" className={s.input} />
        <Typography variant="body2" className={s.text}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button variant="primary" fullWidth={true} className={s.sendButton}>
          Send Insrtuctions
        </Button>
        <Typography variant="body2" className={s.questionText}>
          Did you remember your password?
        </Typography>
        <Button variant="link">Try logging in</Button>
      </div>
    </Card>
  )
}
