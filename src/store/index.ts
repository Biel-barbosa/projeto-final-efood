import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import deliveryReducer from './deliverySlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    delivery: deliveryReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 