import { FC } from 'react'

import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'

import { Typography } from '../typography/typography'

import s from './select.module.scss'

interface SelectType {
  id: number
  value: string
  item: string
}

interface SelectItemType {
  label: string
  values: SelectType[]
}

export const SelectComponent: FC<SelectItemType> = ({ label, values }) => (
  <div className={s.selectRoot}>
    <Select.Root>
      <Typography variant="body2" className={s.selectLabel}>
        {label}
      </Typography>
      <Select.Trigger className={s.SelectTrigger}>
        <Select.Value placeholder={values[0].item} />
        <Select.Icon className={s.SelectIcon}>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className={s.SelectContent}>
          <Select.ScrollUpButton className={s.SelectScrollButton}>
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport>
            <Select.Group>
              {values.map(i => (
                <Select.Item key={i.id} value={i.value} className={s.Item}>
                  <Select.ItemText>
                    <Typography variant="body1">{i.item}</Typography>
                  </Select.ItemText>
                  <Select.ItemIndicator className={s.SelectItemIndicator}></Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className={s.SelectScrollButton}>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  </div>
)
