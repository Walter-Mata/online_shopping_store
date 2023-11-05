import React from 'react'
import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { FaArrowRight,FaTrashAlt } from 'react-icons/fa'

import TapButton from '../../components/button'
import { CartItem } from '../../components/cartitem'
import useViewModel from '../../pages/home/useViewModel'

import { useAppCartItem } from '../../store/app'


import { formatPrice,checkoutTotal } from '../../helper'

import { Item } from '../../model'

type OrderSummaryItemProps = {
  label: string
  value?: string
  children?: React.ReactNode
}

interface CartItemProps extends Item {
  quantity: number
}

const OrderSummaryItem = (props: OrderSummaryItemProps) => {
  const { label, value, children } = props
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  )
}

export const CartOrderSummary = () => {
  const cartItem = useAppCartItem()
  const { updateCart,removeItemInCart,removeAll,onCheckout } = useViewModel()

  return (
    <Stack
      minW={'400px'}
      spacing="4" borderWidth="1px" rounded="lg" padding="4" >
       <Flex
            width={'full'}
            direction={{ base: 'row', md: 'row' }}
            alignItems={'center'}
            justifyContent={'space-between'}
          > 
        <Heading size="lg">My Cart</Heading>
        
        <TapButton
          text='Clear Cart'
          isLoading={false}
          loadingText=''
          onClick={removeAll}
          leftIcon={<FaTrashAlt />} />
        
      </Flex>
      <Stack spacing="4">
         {cartItem.map((item: CartItemProps) => (
           <CartItem key={item.id} {...item}
             onChangeQuantity={(quantity) => updateCart(item, quantity)}
             onClickDelete={(id)=>removeItemInCart(id)}
           />
         ))}
        <OrderSummaryItem label="Subtotal" value= {formatPrice(checkoutTotal(cartItem))} />
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(checkoutTotal(cartItem))}
          </Text>
        </Flex>
      </Stack>
      <Button
        colorScheme="blue"
        size="lg"
        fontSize="md"
        onClick={onCheckout}
        rightIcon={<FaArrowRight />}>
        Checkout
      </Button>
    </Stack>
  )
}