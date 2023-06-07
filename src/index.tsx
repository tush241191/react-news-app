import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, useRoutes} from 'react-router-dom'

import {router} from './router'

const App = () => {
  return useRoutes(router)
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Router>
    <App />
  </Router>
)
