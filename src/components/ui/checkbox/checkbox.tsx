import { FC, ReactNode } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { Label } from '@radix-ui/react-label'

import SvgCheckBox from '../../../icons/checkBox'
import { Typography } from '../typography/typography'

import s from './checkbox.module.scss'

interface CheckBoxProps {
  label?: ReactNode
}

export const CheckBox: FC<CheckBoxProps> = ({ label }) => {
  return (
    <div className={s.root}>
      <Checkbox.Root className={s.checkBoxRoot} defaultChecked id="c1">
        <Checkbox.Indicator className={s.CheckboxIndicator}>
          <SvgCheckBox className={s.icon} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      {label && (
        <Label className={s.label}>
          <Typography variant="body2">{label}</Typography>
        </Label>
      )}
    </div>
  )
}
