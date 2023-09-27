import SvgLogo from '../../../icons/logo'
import { Button } from '../button'
import { Typography } from '../typography/typography'

import s from './header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logoAndButton}>
        <SvgLogo />
        <Button variant="primary">
          <Typography variant="subtitle2">Sign In</Typography>
        </Button>
      </div>
    </header>
  )
}
