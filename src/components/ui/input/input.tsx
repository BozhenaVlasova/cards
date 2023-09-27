import { ChangeEvent, FC, ReactNode, useState } from 'react'

import { TextField } from '@radix-ui/themes'

import SvgEyeOffOutline from '../../../icons/eyeOffOutline'
import SvgEyeOutline from '../../../icons/eyeOutline'
import SvgSearch from '../../../icons/search'
import { Typography } from '../typography/typography'

import s from './input.module.scss'

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password' | 'find'
  children?: ReactNode
  label?: string
  value: string | number
  name: string
  placeholder: string
  error?: boolean
  className?: string
  disabled?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  className,
  disabled,
  onChange,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
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
          type={showPassword ? 'text' : type}
          id={label}
          name={name}
          placeholder={placeholder}
          className={s.input}
          {...rest}
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
