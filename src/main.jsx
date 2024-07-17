import React from 'react'
import ReactDOM from 'react-dom/client'

import { Login } from './containers/Login'
import GlobalStyle from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
    <GlobalStyle />
  </React.StrictMode>,
)
