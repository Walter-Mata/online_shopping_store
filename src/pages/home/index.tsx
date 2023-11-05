import React from 'react'
import {
  Box,
  Flex,
  Heading,
  HStack,
  Input,
  Link,
  Select,
  Stack,
  useColorModeValue as mode,
  useColorModeValue,
} from '@chakra-ui/react'

import { useAppCartItem } from '../../store/app'

import { CartOrderSummary } from '../../layout/cartordersummary'

import StoreItem from '../../components/storeitem'

import useViewModel from './useViewModel'
import { isItemExistInCart } from '../../helper'

import { Item } from '../../model'

const Home = () => {
  const cartItem = useAppCartItem()
  const { addToCart, prepareCategory, filteredByName, filteredByCategory, items, sortUnitPrice } =
    useViewModel()

  return (
    <Box
      maxW={{ base: '3xl', lg: '8xl' }}
      mx="auto"
      px={{ base: '4', md: '8', lg: '12' }}
      py={{ base: '6', md: '8', lg: '12' }}
    >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        align={{ lg: 'flex-start' }}
        spacing={{ base: '16', md: '16' }}
      >
        <Stack spacing={{ base: '8', md: '2' }} flex="2">
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shop Items
          </Heading>

          <Input placeholder="Search Product" onChange={(e) => filteredByName(e.target.value)} />

          <Select
            width={'full'}
            placeholder="Select Category"
            focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
            onChange={(e) => filteredByCategory(e.target.value)}
          >
            <option value={'All'}>All</option>
            {prepareCategory.map((item: Item, index: number) => (
              <option value={item.category}>{item.category}</option>
            ))}
          </Select>

          <Select
            width={'full'}
            aria-label="Sort by unit price"
            placeholder="Sort by unit price"
            focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
            onChange={(e) => sortUnitPrice(e.target.value)}
          >
            <option value={'LTH'}>Lower to Highest</option>
            <option value={'HTL'}>Highest to Lower</option>
          </Select>

          <Stack spacing="7">
            {items.map((item: Item) => (
              <StoreItem key={item.id} {...item} onAddToCart={() => addToCart(item)} />
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary />
        </Flex>
      </Stack>
    </Box>
  )
}

export default Home
