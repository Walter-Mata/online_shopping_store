import React from 'react'
import {
  Box,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { FiGift } from 'react-icons/fi'
import { Item } from '@/model'

export type CartProductMetaProps = {
  isGiftWrapping?: boolean
  name: string
  description: string
  image: string


}

export const CartProductMeta = (props: Item) => {
  const {id,productName,description,unitPrice,imageUrl,category} = props
  return (
    <Stack direction="row" spacing="5" width="full">
      <Image
        rounded="lg"
        width="120px"
        height="120px"
        fit="cover"
        src={imageUrl}
        alt={productName}
        draggable="false"
        loading="lazy"
      />
      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium">{productName}</Text>
          {category &&
            <Text fontWeight="regular">{`Category: ${category}`}</Text>}
          <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
            {description}
          </Text>
        </Stack>
        {/* {isGiftWrapping && (
          <HStack spacing="1" mt="3" color={mode('gray.600', 'gray.400')}>
            <Icon as={FiGift} boxSize="4" />
            <Link fontSize="sm" textDecoration="underline">
              Add gift wrapping
            </Link>
          </HStack>
        )} */}
      </Box>
    </Stack>
  )
}