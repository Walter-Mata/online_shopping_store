import React, { ReactNode } from 'react'
import {
  CloseButton,
  Divider,
  Flex,
  Link,
  Select,
  SelectProps,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaCartPlus } from 'react-icons/fa'

import { useAppCartItem } from '../../store/app'

import { Item } from '../../model'

import TapButton from '../button'
import { CartProductMeta } from '../cartproductmeta'
import { PriceTag } from '../pricetag'
import { isItemExistInCart } from '../../helper'

interface CartItemProps extends Item {
  onAddToCart: () => void;
}

const StoreItem = (props: CartItemProps) => {
  const cartItem = useAppCartItem()
  const { id, productName, description, category, imageUrl, unitPrice, onAddToCart } = props

  return (
    <Flex
      width="full"
      direction={{ base: 'column', md: 'row' }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        id=""
        productName={productName}
        description={description}
        imageUrl={imageUrl}
        unitPrice={0}
        category={category}
      />

      {/* Desktop */}
      <Flex justify="flex-end" display={{ base: 'none', md: 'flex' }}>
        <Flex direction={{ base: 'column', md: 'column' }} justify="space-between" align="center">
          <PriceTag price={unitPrice} currency={'PHP'} />
          <Divider style={{ height: 20 }} />

          <TapButton
            text="Add to cart"
            isDisabled={isItemExistInCart(cartItem, id)}
            loadingText=""
            isLoading={false}
            onClick={onAddToCart}
            leftIcon={<FaCartPlus />}
          />
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
export default StoreItem
