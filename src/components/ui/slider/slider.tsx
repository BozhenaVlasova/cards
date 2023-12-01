import { FC, useState } from 'react'

import * as RadixSlider from '@radix-ui/react-slider'

import s from './slider.module.scss'

import { Typography } from '@/components/ui/typography'

interface SliderProps {
  start: number
  finish: number
  minValue: number
  maxValue: number
}

export const Slider: FC<SliderProps> = ({ start, finish, minValue, maxValue }) => {
  const [minVal, setMinValue] = useState(minValue)
  const [maxVal, setMaxValue] = useState(maxValue)

  const changeValue = (value: number[]) => {
    if (Array.isArray(value)) {
      setMinValue(value[0])
      setMaxValue(value[1])
    } else setMinValue(value)
  }

  return (
    <div>
      <form className={s.form}>
        <span className={s.sliderValue}>
          <Typography variant="body1">{minVal}</Typography>
        </span>
        <RadixSlider.Root
          className={s.sliderRoot}
          defaultValue={[minVal, maxVal]}
          max={finish}
          step={1}
          min={start}
          onValueChange={changeValue}
        >
          <RadixSlider.Track className={s.sliderTrack}>
            <RadixSlider.Range className={s.sliderRange} />
          </RadixSlider.Track>
          <RadixSlider.Thumb className={s.sliderThumb} />
          <RadixSlider.Thumb className={s.sliderThumb} />
        </RadixSlider.Root>
        <span className={s.sliderValue}>
          <Typography variant="body1">{maxVal}</Typography>
        </span>
      </form>
    </div>
  )
}
