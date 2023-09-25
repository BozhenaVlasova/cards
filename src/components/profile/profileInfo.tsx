import { FC } from 'react'

import SvgEdit from '../../icons/edit'
import { SvgLogout } from '../../icons/logout'
import { Button } from '../ui/button'
import { Card } from '../ui/card/card'
import { Input } from '../ui/input/input'
import { Typography } from '../ui/typography/typography'

import s from './profileInfo.module.scss'

interface ProfileInfoType {
  name: string
  avatar: string
  email: string
  value: 'profile' | 'editProfileName'
}

export const ProfileInfo: FC<ProfileInfoType> = ({ name, avatar, email, value }) => {
  return (
    <Card className={s.profileInfo}>
      <Typography variant="large" className={s.title}>
        Personal Information
      </Typography>
      {value === 'profile' && (
        <>
          <div className={s.photoContainer}>
            <div>
              <img src={avatar} alt={'avatar'} />
              <Button className={s.editAvatarButton} variant="secondary">
                <SvgEdit />
              </Button>
            </div>
          </div>
          <div className={s.nameContainer}>
            <Typography variant="h1">{name}</Typography>
            <SvgEdit />
          </div>
          <Typography variant="body2" className={s.email}>
            {email}
          </Typography>
          <div className={s.logout}>
            <Button variant="secondary">
              <SvgLogout />
              <Typography variant="subtitle2">Logout</Typography>
            </Button>
          </div>
        </>
      )}
      {value === 'editProfileName' && (
        <>
          <div className={s.photoContainer}>
            <div>
              <img src={avatar} alt={'avatar'} />
            </div>
          </div>
          <div className={s.nameContainer}>
            <Input
              name="name"
              onChange={() => {}}
              placeholder="Input Name"
              type="text"
              value="name"
              label="Nickname"
              className={s.profileName}
            />
          </div>
          <div className={s.saveName}>
            <Button variant="primary" fullWidth>
              <Typography variant="subtitle2">Save Changes</Typography>
            </Button>
          </div>
        </>
      )}
    </Card>
  )
}
