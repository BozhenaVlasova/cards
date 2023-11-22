import { Button, Card, Typography } from '../../../components'
import SvgEmail from '../../../icons/email'

import s from './checkEmail.module.scss'

type CheckEmailProps = {
  email: string
}

export const CheckEmail = ({ email }: CheckEmailProps) => {
  return (
    <Card>
      <div className={s.content}>
        <Typography variant="large" className={s.title}>
          Check Email
        </Typography>
        <SvgEmail className={s.icon} />
        <Typography variant="body2" className={s.text}>
          We’ve sent an Email with instructions to {email}
        </Typography>
        <div className={s.sendButton}>
          <Button variant="primary" fullWidth>
            <Typography variant="subtitle2">Back to Sign In</Typography>
          </Button>
        </div>
      </div>
    </Card>
  )
}
