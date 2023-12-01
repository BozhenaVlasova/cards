import { useState } from 'react'

import * as Collapsible from '@radix-ui/react-collapsible'
import { useForm } from 'react-hook-form'

import s from './pagePack.module.scss'

import SvgBack from '@/assets/icons/back'
import { ControlledRadioGroup, Button, Card, Typography } from '@/components/ui'

export const CollapsibleComponent = () => {
  const [open, setOpen] = useState(false)

  const { control } = useForm()

  return (
    <Collapsible.Root className={s.collapsibleRoot} open={open} onOpenChange={setOpen}>
      <div className={s.backPage}>
        <SvgBack />
        <Typography variant="body2">Back to Packs List</Typography>
      </div>
      <Card className={s.common}>
        <Typography variant="large" className={s.textCard}>
          Learn &quot;Pack Name&quot;
        </Typography>

        <div className={s.question}>
          <Typography variant="subtitle1">
            Question:{' '}
            {<Typography variant="body1">How &quot;This&quot; works in JavaScript?</Typography>}
          </Typography>
          <Typography variant="body2" className={s.try}>
            Количество попыток ответов на вопрос: {<Typography variant="subtitle2">10</Typography>}
          </Typography>
        </div>

        <Collapsible.Content className={s.content}>
          <div className={s.answer}>
            <Typography variant="subtitle1">
              Answer:{' '}
              {
                <Typography variant="body1">
                  This is how &quot;This&quot; works in JavaScript
                </Typography>
              }
            </Typography>
          </div>
          <div className={s.rate}>
            <Typography variant="subtitle1">Rate yourself:</Typography>
            <ControlledRadioGroup
              name={'radioGroup'}
              control={control}
              options={[
                { value: 'didNotKnow', label: 'Did not know' },
                { value: 'forgot', label: 'Forgot' },
                { value: 'aLotOfThough', label: 'A lot of though' },
                { value: 'confused', label: 'Confused' },
                { value: 'knewTheAnswer', label: 'Knew the answer' },
              ]}
            />
          </div>
        </Collapsible.Content>

        <Collapsible.Trigger asChild>
          <Button className={s.IconButton} variant="primary" fullWidth>
            <Typography variant="subtitle2">{open ? `Next Question` : `Show Answer`}</Typography>
          </Button>
        </Collapsible.Trigger>
      </Card>
    </Collapsible.Root>
  )
}
