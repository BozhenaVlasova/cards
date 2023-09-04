import SvgLogo from '../../../icons/logo'
import { Button } from '../button'

import s from './header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logoAndButton}>
        <SvgLogo />
        <Button variant="primary">Sign In</Button>
      </div>
    </header>
  )
}
