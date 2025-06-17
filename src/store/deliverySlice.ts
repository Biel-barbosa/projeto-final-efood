import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type DeliveryAddress = {
  description: string
  city: string
  zipCode: string
  number: number
  complement: string
}

export type DeliveryState = {
  isDeliveryFormOpen: boolean
  isOrderConfirmed: boolean
  orderId?: string
  receiver: string
  address: DeliveryAddress
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const initialState: DeliveryState = {
  isDeliveryFormOpen: false,
  isOrderConfirmed: false,
  receiver: '',
  address: {
    description: '',
    city: '',
    zipCode: '',
    number: 0,
    complement: ''
  },
  payment: {
    card: {
      name: '',
      number: '',
      code: 0,
      expires: {
        month: 0,
        year: 0
      }
    }
  }
}

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    openDeliveryForm: (state) => {
      state.isDeliveryFormOpen = true
    },
    closeDeliveryForm: (state) => {
      state.isDeliveryFormOpen = false
    },
    setDeliveryInfo: (state, action: PayloadAction<Partial<DeliveryState>>) => {
      return { ...state, ...action.payload }
    },
    confirmOrder: (state, action: PayloadAction<string>) => {
      state.isOrderConfirmed = true
      state.orderId = action.payload
      state.isDeliveryFormOpen = false
    },
    resetOrder: (state) => {
      return initialState
    }
  }
})

export const { openDeliveryForm, closeDeliveryForm, setDeliveryInfo, confirmOrder, resetOrder } = deliverySlice.actions
export default deliverySlice.reducer 