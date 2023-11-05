import { CartItemProps } from '../model'
import { findIndex as lodashFindIndex } from 'lodash'

export const isItemExistInCart = (cartItem: Array<CartItemProps>, id: string) => {
  const itemOnCartIndex = lodashFindIndex(cartItem, (e) => e.id == id)
  return itemOnCartIndex === -1 ? false : true
}

export const formatPrice = (value: number, opts: { locale?: string, currency?: string } = {}) => {
  const { locale = 'en-US', currency = 'USD' } = opts
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: 'currency',
    maximumFractionDigits: 2,
  })
  return formatter.format(value)
}

export const quantityPrice = (unitPrice: number, quantity: number) => {
  return unitPrice * quantity
}

export const checkoutTotal = (cartItem: Array<CartItemProps>) => {
  const itemTotal = cartItem.reduce(
    (previousValue, currentValue: CartItemProps) =>
      previousValue + currentValue.unitPrice * currentValue.quantity,
    0
  )
  return itemTotal
}
