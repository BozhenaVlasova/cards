import { FC } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import { Typography } from '../typography/typography'

import s from './tabSwitcher.module.scss'

interface TabSwitcherType {
  values: TSType[]
}

interface TSType {
  id: number
  value: string
  label: string
}

export const TabSwitcher: FC<TabSwitcherType> = ({ values }) => (
  <Tabs.Root className={s.tabsRoot} defaultValue={values[0].value}>
    <Tabs.List className={s.tabsList}>
      {values.map(item => (
        <Tabs.Trigger className={s.tabsTrigger} value={item.value} key={item.id}>
          <Typography variant="body1">{item.label}</Typography>
        </Tabs.Trigger>
      ))}
    </Tabs.List>
  </Tabs.Root>
)
