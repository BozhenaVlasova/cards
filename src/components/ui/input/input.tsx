import { ChangeEvent, FC, ReactNode, useState } from 'react'

import SvgEyeOffOutline from '../../../icons/eyeOffOutline'
import SvgEyeOutline from '../../../icons/eyeOutline'
import { Typography } from '../typography/typography'

import s from './input.module.scss'

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password'
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
    <div className={s.inputWrapper}>
      <label htmlFor={label} className={s.label}>
        <Typography variant="body2">{label}</Typography>
      </label>
      <div className={s.inputContainer}>
        <input
          type={showPassword ? 'text' : type}
          id={label}
          name={name}
          placeholder={placeholder}
          className={`${className} ${s.input}`}
          {...rest}
        />
        {type === 'password' && (
          <button type="button" className={s.eyeButton} onClick={handleTogglePassword}>
            {showPassword ? <SvgEyeOutline /> : <SvgEyeOffOutline />}
          </button>
        )}
      </div>
      {error && <p className={s.error}>{<Typography variant="caption">Error!</Typography>}</p>}
    </div>
  )
}
