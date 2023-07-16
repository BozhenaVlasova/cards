/* eslint-disable no-nested-ternary */
import { ReactNode, CSSProperties } from 'react'

import s from './typography.module.scss'

interface TypographyProps {
  variant:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'overline'
    | 'link1'
    | 'link2'
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export const Typography = ({ variant, children, className }: TypographyProps) => {
  const classNames = [s[variant], className].filter(Boolean).join(' ')

  const Element =
    variant === 'large'
      ? 'h1'
      : variant === 'h1'
      ? 'h1'
      : variant === 'h2'
      ? 'h2'
      : variant === 'h3'
      ? 'h3'
      : variant === 'subtitle1'
      ? 'h4'
      : variant === 'subtitle2'
      ? 'h5'
      : variant === 'body1'
      ? 'p'
      : variant === 'body2'
      ? 'p'
      : variant === 'caption'
      ? 'span'
      : variant === 'overline'
      ? 'span'
      : variant === 'link1'
      ? 'a'
      : variant === 'link2'
      ? 'a'
      : 'div'

  return <Element className={classNames}>{children}</Element>
}
