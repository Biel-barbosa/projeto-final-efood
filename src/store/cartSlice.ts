import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CartItem = {
  id: number
  foto: string
  nome: string
  preco: number
  quantidade: number
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantidade'>>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id)

      if (existingItem) {
        existingItem.quantidade += 1
      } else {
        state.items.push({ ...action.payload, quantidade: 1 })
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    openCart: (state) => {
      state.isOpen = true
    },
    closeCart: (state) => {
      state.isOpen = false
    },
    clearCart: (state) => {
      state.items = []
      state.isOpen = false
    }
  }
})

export const { addToCart, removeFromCart, openCart, closeCart, clearCart } = cartSlice.actions
export default cartSlice.reducer 