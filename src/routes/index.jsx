import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../containers/Login';
import { Register } from '../containers/Register';
import { Home } from '../containers/Home';
import { Menu } from '../containers/Menu';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Cart } from '../components/Cart';
import { AnimatedPage } from '../components/Animation';
import { Checkout } from '../containers/Checkout';
import { CompletePayment } from '../containers/CompletePayment';
import paths from '../contants/paths'
import { Admin } from '../containers/Admin';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <AnimatedPage>
        <Login />
      </AnimatedPage>
    ),
  },
  {
    path: '/cadastro',
    element: (
      <AnimatedPage>
        <Register />
      </AnimatedPage>
    ),
  },
  {
    path: '/',
    element: (
      <>
        <AnimatedPage>
          <Header />,
          <Home />,
          <Footer />
        </AnimatedPage>
      </>
    ),
  },
  {
    path: '/cardapio',
    element: (
      <>
        <AnimatedPage>
          <Header />,
          <Menu />
        </AnimatedPage>
      </>
    ),
  },
  {
    path: '/carrinho',
    element: (
      <>
        <AnimatedPage>
          <Header />,
          <Cart />
        </AnimatedPage>
      </>
    ),
  },
  {
    path: '/checkout',
    element: (
      <>
        <AnimatedPage>
          <Header />,
          <Checkout />
        </AnimatedPage>
      </>
    ),
  },
  {
    path: '/complete',
    element: (
      <>
        <Header />
        <CompletePayment />
      </>
    ),
  },
  {
    path: paths.Order,
    element: (
      <>
        <Header />
        <Admin />

      </>
    ),
  },
  {
    path: paths.Product,
    element: (
      <>
        <Header />
        <Admin />

      </>
    ),
  },
  {
    path: paths.EditProduct,
    element: (
      <>
        <Header />
        <Admin />
        {/* <Footer /> */}
      </>
    ),
  },
  {
    path: paths.NewProduct,
    element: (
      <>
        <Header />
        <Admin />
        {/* <Footer /> */}
      </>
    ),
  },
]);