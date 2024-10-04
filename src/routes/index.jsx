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
]);