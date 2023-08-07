import { Button } from '../../button'
import { Card } from '../../card/card'
import { Input } from '../../input/input'
import { Typography } from '../../typography/typography'

import s from './createNewPassword.module.scss'

export const CreateNewPassword = () => {
  return (
    <Card>
      <div className={s.content}>
        <Typography variant="large" className={s.title}>
          Create new password
        </Typography>
        <Input
          label="Password"
          name="password"
          placeholder="Password"
          type="password"
          className={s.input}
        />
        <Typography variant="body2" className={s.text}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button variant="primary" fullWidth={true} className={s.sendButton}>
          Create New Password
        </Button>
      </div>
    </Card>
  )
}
