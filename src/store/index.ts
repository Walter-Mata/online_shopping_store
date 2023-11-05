import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { cartSlice } from './cartSlice'
import { shopSlice } from './shopSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage: storage,
  whitelist: ['cart', 'shop'],
}

const reducers = combineReducers({
  [cartSlice.name]: cartSlice.reducer,
  [shopSlice.name]: shopSlice.reducer,
})

const rootReducer = (state: any, action: any) => {
  return reducers(state, action)
}

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
