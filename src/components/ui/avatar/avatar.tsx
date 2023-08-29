import { FC } from 'react'

import * as Avatar from '@radix-ui/react-avatar'

import s from './avatar.module.scss'

interface AvatarComponentType {
  image?: string
  name: string
}

const getInitials = (name: string) => {
  let words = name.split(' ')
  let initials = ''

  for (let i = 0; i < words.length; i++) {
    let word = words[i]

    initials += word.charAt(0)
  }

  return initials
}

export const AvatarComponent: FC<AvatarComponentType> = ({ image, name }) => (
  <div style={{ display: 'flex', gap: 20 }}>
    <Avatar.Root className={s.avatarRoot}>
      <Avatar.Image className={s.avatarImage} src={image} alt={name} />
      <Avatar.Fallback className={s.avatarFallback} delayMs={600}>
        {getInitials(name)}
      </Avatar.Fallback>
    </Avatar.Root>
  </div>
)
