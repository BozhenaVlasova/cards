import { Button } from '../../components/ui/button'
import { Typography } from '../../components/ui/typography/typography'
import SvgBack from '../../icons/back'

import s from './namePack.module.scss'

export const NamePack = () => {
  return (
    <div className={s.namePack}>
      <div className={s.backPage}>
        <SvgBack width={16} height={16} />
        <Typography variant="body2">Back to Packs List</Typography>
      </div>
      <Typography variant="large" className={s.title}>
        Name Pack
      </Typography>
      <div className={s.pack}>
        <Typography variant="body1" className={s.message}>
          This pack is empty. Click add new card to fill this pack
        </Typography>
        <Button variant="primary">
          <Typography variant="subtitle2">Add New Card</Typography>
        </Button>
      </div>
    </div>
  )
}
