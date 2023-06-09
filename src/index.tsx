import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, useRoutes} from 'react-router-dom'
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'

import {router} from './router'
import {store} from './store/store'

const App = () => {
  return useRoutes(router)
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const persistor = persistStore(store)

root.render(
  <Router>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Router>
)
