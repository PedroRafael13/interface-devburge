import React from 'react'
import ReactDOM from 'react-dom/client'

import { Elements } from '@stripe/react-stripe-js';
import GlobalStyle from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'
import { Router } from './routes'
import AppProvider from './hooks'
import stripePromise from './config/stripeConfig'
import { ThemeProvider } from 'styled-components';
import { standardTheme } from './styles/theme/standard';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Elements>
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
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>
)