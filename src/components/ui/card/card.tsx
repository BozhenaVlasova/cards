import { FC, ReactNode } from 'react'

import s from './card.module.scss'

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`${s.page} ${className}`}>
      <div className={s.card}>{children}</div>
    </div>
  )
}
