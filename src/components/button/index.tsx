import { ButtonGroup, Button } from '@chakra-ui/react'
import React from 'react'

type ButtonProps = {
  text: string,
  leftIcon: React.ReactElement,
  isLoading: boolean,
  loadingText: string,
  isDisabled?: boolean,
  onClick?: () => void,
}
const TapButton = ({
  text,
  leftIcon,
  isLoading,
  loadingText,
  isDisabled,
  onClick,
}: ButtonProps) => {
  return (
    <Button
      isDisabled={isDisabled}
      leftIcon={leftIcon}
      isLoading={isLoading}
      loadingText={loadingText}
      onClick={onClick}
      textColor="#fff"
    >
      {text}
    </Button>
  )
}
export default TapButton
