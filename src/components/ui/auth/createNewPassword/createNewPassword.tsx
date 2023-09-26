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
          onChange={() => {}}
          value={''}
        />
        <Typography variant="body2" className={s.text}>
          Create new password and we will send you further instructions to email
        </Typography>
        <div className={s.sendButton}>
          <Button variant="primary" fullWidth>
            <Typography variant="subtitle2">Create New Password</Typography>
          </Button>
        </div>
      </div>
    </Card>
  )
}
