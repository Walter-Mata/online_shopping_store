import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { Item } from '../model'
import { Items } from '../mockup-data/item'

type AuthState = {
  shopItems: Array<Item>,
}

const initialState: AuthState = {
  shopItems: Items,
}

// TODO: Remove unnecessary reducers
export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
})

export const {} = shopSlice.actions
