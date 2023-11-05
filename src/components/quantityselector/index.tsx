import React, { useEffect } from 'react'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import { FaTrashAlt } from 'react-icons/fa'

type Props = {
  value: number,
  onChange: (value: any) => void,
  onDelete: () => void,
}
const QuantitySelector = ({ value, onDelete, onChange }: Props) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    step: 1,
    min: 1,
    precision: 0,
  })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  const conditionalProps = value > 1 ? { ...dec } : {}
  return (
    <HStack maxW="320px">
      <Button
        {...conditionalProps}
        onClick={() => (value == 1 ? onDelete() : onChange(input['aria-valuenow']))}
        textColor={'#fff'}
      >
        {value > 1 ? `-` : <FaTrashAlt size={50} />}
      </Button>

      <Input {...input} value={value} style={{ textAlign: 'center' }} />
      <Button {...inc} onClick={() => onChange(input['aria-valuenow'])} textColor={'#fff'}>
        {`+`}
      </Button>
    </HStack>
  )
}
export default QuantitySelector
