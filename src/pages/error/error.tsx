import { Button } from '../../components/ui/button'
import { Typography } from '../../components/ui/typography/typography'
import { SvgError } from '../../icons/error'

import s from './error.module.scss'

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
