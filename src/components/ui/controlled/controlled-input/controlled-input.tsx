import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { Input, InputProps } from '../../'

export type ControlledInputProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>
  control: Control<TFieldValues>
} & Omit<InputProps, 'onChange' | 'value' | 'id'>

export const ControlledInput = <TFieldValues extends FieldValues>(
  props: ControlledInputProps<TFieldValues>
) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: props.name,
    control: props.control,
  })

  return <Input {...props} {...field} errorMessage={error?.message} id={props.name} />
}
