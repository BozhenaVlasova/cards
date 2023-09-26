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
        <div className={s.sendButton}>
          <Button variant="primary" fullWidth>
            <Typography variant="subtitle2">Back to Sign In</Typography>
          </Button>
        </div>
      </div>
    </Card>
  )
}
