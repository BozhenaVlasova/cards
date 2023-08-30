import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input/input'
import { Slider } from '../../components/ui/slider/slider'
import { TabSwitcher } from '../../components/ui/tabSwitcher/tabSwitcher'
import { Typography } from '../../components/ui/typography/typography'
import SvgTrash from '../../icons/trash'

import s from './packsList.module.scss'

export const PacksList = () => {
  return (
    <div className={s.packsList}>
      <div className={s.packsHeader}>
        <Typography variant="large">Packs List</Typography>
        <Button variant="primary">
          <Typography variant="subtitle2">Add New Pack</Typography>
        </Button>
      </div>
      <div className={s.packsFilter}>
        <div className={s.packsInputSearch}>
          <Input
            type="text"
            name="search"
            placeholder="Search"
            value={''}
            onChange={() => {}}
            className={s.packsInput}
          />
        </div>
        <div className={s.packsSwitcher}>
          <Typography variant="body2">Show packs cards</Typography>
          <TabSwitcher
            values={[
              { id: 1, value: 'myCards', label: 'My Cards' },
              { id: 2, value: 'allCards', label: 'All Cards' },
            ]}
          />
        </div>
        <div className={s.packsSlider}>
          <Typography variant="body2">Number of cards</Typography>
          <Slider start={1} finish={10} minValue={2} maxValue={8} />
        </div>
        <div className={s.packsFilterButton}>
          <Button variant="secondary">
            <SvgTrash width={16} height={16} />
            <Typography variant="subtitle2">Clear Filter</Typography>
          </Button>
        </div>
      </div>
    </div>
  )
}
