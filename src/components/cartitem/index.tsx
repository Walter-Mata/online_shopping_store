import React, { ReactNode } from 'react'
import { CloseButton, Divider, Flex, Text, Select, SelectProps, useColorModeValue } from '@chakra-ui/react'
import { PriceTag } from '../pricetag'
import { FaCartPlus } from 'react-icons/fa'
import { CartProductMeta } from '../cartproductmeta'
import { Item } from '@/model'
import TapButton from '../button'
import QuantitySelector from '../quantityselector'
import { quantityPrice } from '../../helper'


interface CartItemProps extends Item {
    quantity:number,
    onChangeQuantity?: (quantity: number) => void
  onClickDelete?: (itemId:string) => void
}


export const CartItem = (props: CartItemProps) => {
  const {
    // isGiftWrapping,
    id,
    productName,
    description,
    quantity,
    imageUrl,
    //currency,
    unitPrice,
    onChangeQuantity,
    onClickDelete,
  } = props

  
  return (
    <Flex
      width="full"
      direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
      <CartProductMeta
        id=""
        productName={productName}
        description={''}
        imageUrl={imageUrl}
        unitPrice={0}
        category=""
      />

      {/* Desktop */}
      <Flex justify="flex-end" display={{ base: 'none', md: 'flex' }}>
        <Flex
          direction={{ base: 'column', md: 'column' }}
          justify="space-between" align="center" > 
          <QuantitySelector
            value={quantity}
            onDelete={()=>onClickDelete?.(id)}
            onChange={(value: number) => {
              onChangeQuantity?.(value)
            }} />
          <Divider style={{ height: 20 }} />
          <Flex
            width={'full'}
            direction={{ base: 'row', md: 'row' }}
            justifyContent={'space-between'}
          > 
            <Text>Unit Price:</Text>
            <PriceTag price={unitPrice} currency={'PHP'} /> 
          </Flex>
             <Flex
             width={'full'}
            direction={{ base: 'row', md: 'row' }}
            justifyContent={'space-between'}>
             <Text>Quantity Price:</Text>
            <PriceTag price={quantityPrice(unitPrice,quantity)} currency={'PHP'} /> 
            </Flex>
          </Flex>
      </Flex>

      {/* Mobile
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: 'flex', md: 'none' }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantitySelect
          value={0}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value)
          }}
        />
       <PriceTag price={unitPrice} currency={'PHP'} /> 
      </Flex> */}
    </Flex>
  )
}