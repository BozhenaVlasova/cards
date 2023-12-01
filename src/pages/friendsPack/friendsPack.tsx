import s from './friendsPack.module.scss'

import { SvgBack, SvgStar, SvgStarOutline } from '@/assets/icons'
import { Button, Input, TableComponent, Typography } from '@/components/ui'

export const FriendsPack = () => {
  return (
    <div className={s.friendsPack}>
      <div className={s.backPage}>
        <SvgBack />
        <Typography variant="body2">Back to Packs List</Typography>
      </div>
      <div className={s.common}>
        <Typography variant="large">Friend&apos;s Pack</Typography>
        <Button variant="primary">
          <Typography variant="subtitle2">Learn to Pack</Typography>
        </Button>
      </div>
      <div className={s.search}>
        <Input
          type="find"
          name="search"
          placeholder="Input search"
          value={''}
          onChange={() => {}}
        />
      </div>
      <TableComponent
        variant="friendsPack"
        headerTitle={['Question', 'Answer', 'Last Updated', 'Grade']}
        valueBody={[
          'How "This" works in JavaScript?',
          'This is how "This" works in JavaScript',
          '18.03.2021',
          <>
            <SvgStar className={s.svg} />
            <SvgStar className={s.svg} />
            <SvgStar className={s.svg} />
            <SvgStar className={s.svg} />
            <SvgStarOutline className={s.svg} />
          </>,
        ]}
      />
    </div>
  )
}
