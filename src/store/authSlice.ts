import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {User} from 'src/feature/auth/types'

export interface UserState {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: state => {
      state.isLoading = true
      state.error = ''
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true
      state.user = action.payload
      state.isLoading = false
      state.error = ''
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false
      state.user = null
      state.isLoading = false
      state.error = action.payload
    },
    logoutRequest: state => {
      state.isAuthenticated = false
      state.user = null
      state.isLoading = false
      state.error = ''
    }
  }
})

export const {loginRequest, loginSuccess, loginFailure, logoutRequest} = authSlice.actions

export default authSlice.reducer
