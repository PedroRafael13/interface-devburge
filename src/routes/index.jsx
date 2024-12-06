import React from 'react';
import { Router, Routes } from 'react-router-dom';
import { Login } from '../containers/Login';
import { Register } from '../containers/Register';
import { Home } from '../containers/Home';
import { Menu } from '../containers/Menu';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Cart } from '../components/Cart';
//import { AnimatedPage } from '../components/Animation';
import { Checkout } from '../containers/Checkout';
import { CompletePayment } from '../containers/CompletePayment';
import paths from '../contants/paths'
import { Admin } from '../containers/Admin';

import { UserLayout } from '../layouts/UserLayout';
import { AdminLayout } from '../layouts/AdminLayout';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<UserLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/cardapio' element={<Menu />} />
        <Route path='/carrinho' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/complete' element={<CompletePayment />} />
      </Route>

      <Routes path='/admin' element={<AdminLayout />}>
        <Router path='/admin/Admin' element={<Admin />} />
      </Routes>

      <Route path='/login' element={<Login />} />
      <Route path='/cadastro' element={<Register />} />
    </Routes>
  )
}

export const router = createBrowserRouter([
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