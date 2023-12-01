import { ChangeEvent, useState, ComponentPropsWithoutRef, forwardRef } from 'react'

import { TextField } from '@radix-ui/themes'

import s from './input.module.scss'

import { SvgEyeOffOutline, SvgEyeOutline, SvgSearch } from '@/assets/icons'
import { Typography } from '@/components/ui/typography'

export type InputProps = {
  type: 'text' | 'number' | 'email' | 'password' | 'find'
  label?: string
  errorMessage?: string
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, label, placeholder, onChange, onValueChange, errorMessage }, ref) => {
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
        </TextField.Root>
        <p className={s.error}>{<Typography variant="caption">{errorMessage}</Typography>}</p>
      </div>
    )
  }
)
