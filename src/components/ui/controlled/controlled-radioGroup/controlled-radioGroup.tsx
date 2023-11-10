import { FieldValues, useController, FieldPath, Control } from 'react-hook-form'

import { RadioGroupComponent, RadioGroupProps } from '../../'

export type ControlledRadioGroupProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>
  control: Control<TFieldValues>
} & Omit<RadioGroupProps, 'onChange' | 'value' | 'id'>

export const ControlledRadioGroup = <TFieldValues extends FieldValues>(
  props: ControlledRadioGroupProps<TFieldValues>
) => {
  const {
    field: { onChange, ...field },
    fieldState: { error },
  } = useController({
    name: props.name,
    control: props.control,
  })

  return (
    <RadioGroupComponent
      {...props}
      {...field}
      onValueChange={onChange}
      errorMessage={error?.message}
      id={props.name}
    />
  )
}
