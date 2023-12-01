import s from './error.module.scss'

import SvgError from '@/assets/icons/error'
import { Button, Typography } from '@/components/ui'

export const Error = () => {
  return (
    <div className={s.errorRoot}>
      <SvgError className={s.error} />
      <Typography variant="body1" className={s.text}>
        Sorry! Page not found!
      </Typography>
      <Button variant="primary">
        <Typography variant="subtitle2">Back to home page</Typography>
      </Button>
    </div>
  )
}
