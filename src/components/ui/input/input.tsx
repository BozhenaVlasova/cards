import { ChangeEvent, useState, ComponentPropsWithoutRef, forwardRef } from 'react'

import { TextField } from '@radix-ui/themes'

import SvgEyeOffOutline from '../../../icons/eyeOffOutline'
import SvgEyeOutline from '../../../icons/eyeOutline'
import SvgSearch from '../../../icons/search'
import { Typography } from '../typography/typography'

import s from './input.module.scss'

type InputProps = {
  type: 'text' | 'number' | 'email' | 'password' | 'find'
  label?: string
  error?: boolean
  reg?: any
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, label, placeholder, error, onChange, onValueChange, reg }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const handleTogglePassword = () => {
      setShowPassword(!showPassword)
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
      onChange?.(e)
      onValueChange?.(e.target.value)
      setInputValue(e.target.value)
    }

    return (
      <div className={s.inputContainer}>
        <label htmlFor={label} className={s.label}>
          <Typography variant="body2">{label}</Typography>
        </label>
        <TextField.Root className={s.inputWrapper}>
          {type === 'find' && (
            <TextField.Slot className={s.search}>
              <SvgSearch />
            </TextField.Slot>
          )}
          <TextField.Input
            className={s.input}
            placeholder={placeholder}
            ref={ref}
            type={showPassword ? 'text' : type}
            {...reg}
            onChange={handleChange}
            value={inputValue}
          />
          {type === 'password' && (
            <TextField.Slot>
              <button type="button" className={s.eyeButton} onClick={handleTogglePassword}>
                {showPassword ? <SvgEyeOutline /> : <SvgEyeOffOutline />}
              </button>
            </TextField.Slot>
          )}
          {error && <p className={s.error}>{<Typography variant="caption">Error!</Typography>}</p>}
        </TextField.Root>
      </div>
    )
  }
)
