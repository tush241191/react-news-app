import {configureStore} from '@reduxjs/toolkit'

import authReducer, {UserState} from './authSlice'

export interface RootState {
  auth: UserState;
}

export const store = configureStore({
  reducer: {
    auth: authReducer
  }
})
