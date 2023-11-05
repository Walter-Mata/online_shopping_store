import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { findIndex as lodashFindIndex, filter as lodashFilter } from 'lodash'
import { Item } from '../model'

interface cartItemProps extends Item {
  quantity: number;
}

type AuthState = {
  cartItem: Array<cartItemProps>,
}

const initialState: AuthState = {
  cartItem: [],
}

// TODO: Remove unnecessary reducers
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, { payload }: PayloadAction<cartItemProps>) => {
      const itemOnCartIndex = lodashFindIndex(state.cartItem, (e) => e.id == payload.id)
      if (itemOnCartIndex == -1) {
        state.cartItem = [...state.cartItem, payload]
      } else {
        state.cartItem[itemOnCartIndex].quantity += 1
      }
    },
    updateItemCart: (state, { payload }: PayloadAction<cartItemProps>) => {
      const itemOnCartIndex = lodashFindIndex(state.cartItem, (e) => e.id == payload.id)
      state.cartItem[itemOnCartIndex].quantity = payload.quantity
    },
    removeToCart: (state, { payload }: PayloadAction<string>) => {
      state.cartItem = lodashFilter(state.cartItem, (e) => e.id !== payload)
    },

    clearCart: (state) => {
      state.cartItem = []
    },
  },
})

export const { addItemToCart, updateItemCart, removeToCart, clearCart } = cartSlice.actions
