import { forwardRef } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

import { Typography } from '@/components/ui/typography'

export type RadioGroupProps = Omit<
  React.ComponentPropsWithoutRef<typeof RadioGroup.Root>,
  'children'
> & {
  options: RadioGroupType[]
  errorMessage?: string
}
type RadioGroupType = {
  value: string
  label: string
}

export const RadioGroupComponent = forwardRef<
  React.ElementRef<typeof RadioGroup.Root>,
  RadioGroupProps
>((props, ref) => {
  const { options, errorMessage, ...restProps } = props

  return (
    <form>
      <RadioGroup.Root className={s.radioGroupRoot} {...restProps} ref={ref}>
        {options.map(item => (
          <div className={s.radioGroupCommon} key={item.value}>
            <RadioGroup.Item className={s.radioGroupItem} value={item.value} id={`r${item.value}`}>
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
})
