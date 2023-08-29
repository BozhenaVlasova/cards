import { FC } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import SvgEdit from '../../../icons/edit'
import SvgLearn from '../../../icons/learn'
import { SvgLogout } from '../../../icons/logout'
import SvgMore from '../../../icons/moreVertical'
import SvgPesron from '../../../icons/person'
import SvgTrash from '../../../icons/trash'
import { AvatarComponent } from '../avatar/avatar'
import { Typography } from '../typography/typography'

import s from './dropDownMenu.module.scss'

interface DropdownPersonType {
  value: 'profile' | 'more'
  name?: string
  image?: string
  email?: string
}

export const DropdownMenuComponent: FC<DropdownPersonType> = ({ value, name, image, email }) => {
  return (
    <DropdownMenu.Root>
      {value === 'profile' && (
        <>
          <DropdownMenu.Trigger asChild>
            <button className={s.iconButton}>
              {name !== undefined && <AvatarComponent name={name} image={image} />}
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className={s.dropdownMenuContent} sideOffset={5}>
              <div className={s.person}>
                {name !== undefined && <AvatarComponent name={name} image={image} />}
                <div className={s.personInfo}>
                  <Typography variant="subtitle2">{name}</Typography>
                  <Typography variant="caption" className={s.personEmail}>
                    {email}
                  </Typography>
                </div>
              </div>

              <DropdownMenu.Separator className={s.dropdownMenuSeparator} />

              <DropdownMenu.CheckboxItem className={s.dropdownMenuCheckboxItem}>
                <SvgPesron />
                <Typography variant="caption" className={s.label}>
                  My Profile
                </Typography>
              </DropdownMenu.CheckboxItem>

              <DropdownMenu.Separator className={s.dropdownMenuSeparator} />

              <DropdownMenu.CheckboxItem className={s.dropdownMenuCheckboxItem}>
                <SvgLogout />
                <Typography variant="caption" className={s.label}>
                  Sign Out
                </Typography>
              </DropdownMenu.CheckboxItem>

              <DropdownMenu.Arrow className={s.dropdownMenuArrow} />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </>
      )}
      {value === 'more' && (
        <>
          <DropdownMenu.Trigger asChild>
            <button className={s.iconButton}>
              <SvgMore />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className={s.dropdownMenuContent} sideOffset={5}>
              <DropdownMenu.CheckboxItem className={s.dropdownMenuCheckboxItem}>
                <SvgLearn />
                <Typography variant="caption" className={s.label}>
                  Learn
                </Typography>
              </DropdownMenu.CheckboxItem>

              <DropdownMenu.Separator className={s.dropdownMenuSeparator} />

              <DropdownMenu.CheckboxItem className={s.dropdownMenuCheckboxItem}>
                <SvgEdit />
                <Typography variant="caption" className={s.label}>
                  Edit
                </Typography>
              </DropdownMenu.CheckboxItem>

              <DropdownMenu.Separator className={s.dropdownMenuSeparator} />

              <DropdownMenu.CheckboxItem className={s.dropdownMenuCheckboxItem}>
                <SvgTrash />
                <Typography variant="caption" className={s.label}>
                  Delete
                </Typography>
              </DropdownMenu.CheckboxItem>

              <DropdownMenu.Arrow className={s.dropdownMenuArrow} />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </>
      )}
    </DropdownMenu.Root>
  )
}
