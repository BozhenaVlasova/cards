import { ChangeEvent, FC, useState } from 'react'

import s from './profileInfo.module.scss'

import { SvgEdit, SvgLogout } from '@/assets/icons'
import { Button, Card, Input, Typography } from '@/components/ui'

interface ProfileInfoType {
  name: string
  avatar: string
  email: string
}

export const ProfileInfo: FC<ProfileInfoType> = ({ name, avatar, email }) => {
  const [nameEdit, setNameEdit] = useState(name)
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const nameProfileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNameEdit(event.target.value)
  }

  const nameProfileSaveChanges = () => {
    setIsOpen(true)
  }

  const isOpenChange = () => {
    setIsOpen(false)
  }

  return (
    <Card className={s.profileInfo}>
      <Typography variant="large" className={s.title}>
        Personal Information
      </Typography>
      {isOpen ? (
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
            <Typography variant="h1">{nameEdit}</Typography>
            <SvgEdit onClick={isOpenChange} />
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
      ) : (
        <>
          <div className={s.photoContainer}>
            <div>
              <img src={avatar} alt={'avatar'} />
            </div>
          </div>
          <div className={s.nameEdit}>
            <Input
              name="name"
              onChange={nameProfileChange}
              placeholder="Enter name"
              type="text"
              value={nameEdit}
              label="Nickname"
              className={s.profileName}
            />
          </div>
          <div className={s.saveName}>
            <Button variant="primary" fullWidth onClick={nameProfileSaveChanges}>
              <Typography variant="subtitle2">Save Changes</Typography>
            </Button>
          </div>
        </>
      )}
    </Card>
  )
}
