import { FC } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import { Typography } from '../typography/typography'

import s from './radioGroup.module.scss'

interface RadioGroupComponentType {
  values: RadioGroupType[]
}
interface RadioGroupType {
  id: number
  value: string
  label: string
}

export const RadioGroupComponent: FC<RadioGroupComponentType> = ({ values }) => (
  <form>
    <RadioGroup.Root className={s.radioGroupRoot} defaultValue={values[0].value}>
      {values.map(item => (
        <div className={s.radioGroupCommon} key={item.id}>
          <RadioGroup.Item className={s.radioGroupItem} value={item.value} id={`r${item.id}`}>
            <RadioGroup.Indicator className={s.radioGroupIndicator} />
          </RadioGroup.Item>
          <Typography variant="body2" className={s.label}>
            {item.label}
          </Typography>
        </div>
      ))}
    </RadioGroup.Root>
  </form>
)
