import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../containers/Login';
import { Register } from '../containers/Register';
import { Home } from '../containers/Home';
import { Menu } from '../containers/Menu';
import { Cart } from '../components/Cart';
//import { AnimatedPage } from '../components/Animation';
import { Checkout } from '../containers/Checkout';
import { CompletePayment } from '../containers/CompletePayment';

import { EditProduct } from '../containers/Admin/EditProduct'
import { ListProducts } from '../containers/Admin/ListProducts'
import { CreateProducts } from '../containers/Admin/CreateProducts'
import { UserLayout } from '../layouts/UserLayout';
import { AdminLayout } from '../layouts/AdminLayout';
import { Orders } from '../containers/Admin/Orders';

export function Router() {
  return (
    <>
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/cardapio' element={<Menu />} />
          <Route path='/carrinho' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/complete' element={<CompletePayment />} />
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route path='/admin/pedidos' element={<Orders />} />
          <Route path='/admin/novo-produto' element={<CreateProducts />} />
          <Route path='/admin/editar-produtor' element={<EditProduct />} />
          <Route path='/admin/produtc' element={<ListProducts />} />
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Register />} />
      </Routes>
    </>
  )
}