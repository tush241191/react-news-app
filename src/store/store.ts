import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {createTransform, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {decryptData, encryptData} from 'src/utils/utils'

import authReducer, {UserState} from './authSlice'

export interface RootState {
  auth: UserState;
}

const rootReducer = combineReducers({
  auth: authReducer
})

const encryptionTransform = createTransform(
  (inboundState: any) => {
    return encryptData(JSON.stringify(inboundState))
  },
  (outboundState: any) => {
    return JSON.parse(decryptData(outboundState))
  }
)

const persistConfig = {
  key: 'root',
  storage,
  transforms: [encryptionTransform]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
})
