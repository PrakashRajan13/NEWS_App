import { configureStore } from '@reduxjs/toolkit'
import Data from '../redux/slices/Data'

export const store = configureStore({
  reducer: {
    data: Data,
  },
})