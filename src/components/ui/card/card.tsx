import { FC, ReactNode } from 'react'

import s from './card.module.scss'

interface CardProps {
  children: ReactNode
}

export const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className={s.page}>
      <div className={s.card}>{children}</div>
    </div>
  )
}
