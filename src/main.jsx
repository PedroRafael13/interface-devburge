import React from 'react'
import ReactDOM from 'react-dom/client'

import { Login } from './containers/Login'
import GlobalStyle from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
    <GlobalStyle />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition:Flip
    />
  </React.StrictMode>,
)
