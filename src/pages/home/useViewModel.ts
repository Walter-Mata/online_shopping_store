import React, { useState } from 'react'
import lodash from 'lodash'
import { addItemToCart, clearCart, removeToCart, updateItemCart } from '../../store/cartSlice'
import { useAppCartItem, useAppDispatch, useAppShopItem } from '../../store/app'
import { Item } from '../../model'

const useViewModel = () => {
  const dispatch = useAppDispatch()
  const cartItem = useAppCartItem()
  const shopItems = useAppShopItem()

  const [items, setItems] = useState(shopItems)

  const prepareCategory = shopItems.filter(
    (obj: Item, index: number) =>
      shopItems.findIndex((item: Item) => item.category === obj.category) === index
  )

  const addToCart = (item: any) => {
    dispatch(addItemToCart({ ...item, quantity: 1 }))
  }

  const updateCart = (item: Item, quantity: number) => {
    dispatch(updateItemCart({ ...item, quantity: quantity }))
  }
  const removeItemInCart = (id: string) => {
    dispatch(removeToCart(id))
  }
  const removeAll = () => {
    dispatch(clearCart())
  }
  const filteredByName = (itemName: string) => {
    if (itemName == '') {
      return setItems(shopItems)
    }
    const filteredCategory = shopItems.filter((item: Item) =>
      item.productName.toLowerCase().includes(itemName.toLowerCase())
    )
    setItems(filteredCategory)
  }

  const filteredByCategory = (categoryName: string) => {
    if (categoryName == 'All') {
      return setItems(shopItems)
    }
    const filteredCategory = shopItems.filter((item: Item) => item.category === categoryName)
    setItems(filteredCategory)
  }
  const sortUnitPrice = (sort: string) => {
    const iteratees = (obj: Item) => (sort == 'LTH' ? obj.unitPrice : -obj.unitPrice)
    const sorted = sort != '' ? shopItems : lodash.sortBy(items, iteratees)
    setItems(sorted)
  }

  const onCheckout = () => {
    if (cartItem.length > 0) {
      removeAll()
      alert('Thank you for Purchasing !!!')
    }
  }
  return {
    addToCart,
    updateCart,
    removeItemInCart,
    removeAll,
    onCheckout,
    filteredByName,
    filteredByCategory,
    sortUnitPrice,
    prepareCategory,
    items,
  }
}

export default useViewModel
