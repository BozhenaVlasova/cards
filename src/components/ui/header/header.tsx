import SvgLogo from '../../../icons/logo'
import { Button } from '../button'

import s from './header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <SvgLogo className={s.logo} />
      <Button variant="primary" className={s.button}>
        Sign In
      </Button>
    </header>
  )
}
