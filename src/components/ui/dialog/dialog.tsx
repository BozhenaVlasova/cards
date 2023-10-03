import { FC } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import SvgClose from '../../../icons/close'
import { Button } from '../button'
import { CheckBox } from '../checkbox/checkbox'
import { Input } from '../input/input'
import { SelectComponent } from '../select/select'
import { Typography } from '../typography/typography'

import s from './dialog.module.scss'

interface DialogComponentType {
  value: 'addPack' | 'editPack' | 'deletePack' | 'addNewCard' | 'editCard' | 'deleteCard'
}

export const DialogComponent: FC<DialogComponentType> = ({ value }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button variant="primary">
        <Typography variant="subtitle2">Add New Pack</Typography>
      </Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className={s.dialogOverlay} />
      <Dialog.Content className={s.dialogContent}>
        <div className={s.dialogTitle}>
          <Dialog.Title className={s.title}>
            {value === 'addPack' && <Typography variant="h2">Add New Pack</Typography>}
            {value === 'editPack' && <Typography variant="h2">Edit Pack</Typography>}
            {value === 'deletePack' && <Typography variant="h2">Delete Pack</Typography>}
            {value === 'addNewCard' && <Typography variant="h2">Add New Card</Typography>}
            {value === 'editCard' && <Typography variant="h2">Edit Card</Typography>}
            {value === 'deleteCard' && <Typography variant="h2">Delete Card</Typography>}
          </Dialog.Title>
          <Dialog.Close asChild>
            <button className={s.iconButton}>
              <SvgClose />
            </button>
          </Dialog.Close>
        </div>
        {(value === 'addPack' || value === 'editPack') && (
          <fieldset className={s.dialogFieldset}>
            <Input
              name="name"
              value={'name'}
              placeholder="Name"
              type="text"
              label="Name Pack"
              onChange={() => {}}
            />
            <CheckBox label="Private Pack" />
          </fieldset>
        )}
        {value === 'deletePack' && (
          <fieldset className={`${s.dialogFieldset} ${s.deleteMessage}`}>
            <Typography variant="body1">
              Do you really want to remove {<b>Pack Name</b>}?<br />
              All cards will be deleted.
            </Typography>
          </fieldset>
        )}
        {(value === 'addNewCard' || value === 'editCard') && (
          <fieldset className={s.dialogFieldset}>
            <SelectComponent
              values={[
                { id: 1, item: 'Text', value: 'text' },
                { id: 2, item: 'Message', value: 'message' },
              ]}
              label="Choose a question format"
            />
            <Input
              name="question"
              value=""
              placeholder="Question"
              type="text"
              label="Question"
              onChange={() => {}}
            />
            <Input
              name="answer"
              value=""
              placeholder="Answer"
              type="text"
              label="Answer"
              onChange={() => {}}
            />
          </fieldset>
        )}
        {value === 'deleteCard' && (
          <fieldset className={`${s.dialogFieldset} ${s.deleteMessage}`}>
            <Typography variant="body1">
              Do you really want to remove {<b>Card Name</b>}?<br />
              All cards will be deleted.
            </Typography>
          </fieldset>
        )}
        <fieldset className={s.dialogButton}>
          <Button variant="secondary">
            <Typography variant="subtitle2">Cancel</Typography>
          </Button>
          <Button variant="primary">
            {value === 'addPack' && <Typography variant="subtitle2">Add New Pack</Typography>}
            {value === 'editPack' && <Typography variant="subtitle2">Save Changes</Typography>}
            {value === 'deletePack' && <Typography variant="subtitle2">Delete Pack</Typography>}
            {value === 'addNewCard' && <Typography variant="subtitle2">Add New Card</Typography>}
            {value === 'editCard' && <Typography variant="subtitle2">Save Changes</Typography>}
            {value === 'deleteCard' && <Typography variant="subtitle2">Delete Card</Typography>}
          </Button>
        </fieldset>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)
