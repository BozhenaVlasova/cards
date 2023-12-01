import s from './checkEmail.module.scss'

import SvgEmail from '@/assets/icons/email'
import { Button, Card, Typography } from '@/components/ui'

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
