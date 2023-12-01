import s from './header.module.scss'

import SvgLogo from '@/assets/icons/logo'
import { Button, Typography } from '@/components/ui'

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
