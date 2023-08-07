import SvgEmail from '../../../../icons/email'
import { Button } from '../../button'
import { Card } from '../../card/card'
import { Typography } from '../../typography/typography'

import s from './checkEmail.module.scss'

export const CheckEmail = () => {
  return (
    <Card>
      <div className={s.content}>
        <Typography variant="large" className={s.title}>
          Check Email
        </Typography>
        <SvgEmail className={s.icon} />
        <Typography variant="body2" className={s.text}>
          We’ve sent an Email with instructions to example@mail.com
        </Typography>
        <Button variant="primary" fullWidth={true} className={s.sendButton}>
          Back to Sign In
        </Button>
      </div>
    </Card>
  )
}
