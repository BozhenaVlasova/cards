import { DialogComponent } from '../../components/ui/dialog/dialog'
import { DropdownMenuComponent } from '../../components/ui/dropDownMenu/dropDownMenu'
import { Input } from '../../components/ui/input/input'
import { TableComponent } from '../../components/ui/table/table'
import { Typography } from '../../components/ui/typography/typography'
import SvgBack from '../../icons/back'
import SvgEdit from '../../icons/edit'
import SvgStar from '../../icons/star'
import SvgStarOutline from '../../icons/starOutline'
import SvgTrash from '../../icons/trash'

import s from './myPack.module.scss'

export const MyPack = () => {
  return (
    <div className={s.myPack}>
      <div className={s.backPage}>
        <SvgBack />
        <Typography variant="body2">Back to Packs List</Typography>
      </div>
      <div className={s.common}>
        <div className={s.title}>
          <Typography variant="large">My Pack</Typography>
          <DropdownMenuComponent value="more" />
        </div>
        <DialogComponent value="addPack" />
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
        variant="myPack"
        headerTitle={['Question', 'Answer', 'Last Updated', 'Grade', '']}
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
          <>
            <SvgEdit className={s.svg} />
            <SvgTrash className={s.svg} />
          </>,
        ]}
      />
    </div>
  )
}
