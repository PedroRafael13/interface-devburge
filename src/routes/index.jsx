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

import { Orders } from '../containers/Admin/Orders';
import { EditProduct } from '../containers/Admin/EditProduct'
import { ListProducts } from '../containers/Admin/ListProducts'
import { CreateProducts } from '../containers/Admin/CreateProducts'
import { UserLayout } from '../layouts/UserLayout';
import { AdminLayout } from '../layouts/AdminLayout';

export function Router() {
  return (
    <>
      <Routes>
      // TODO :    <Routes path='/admin' element={<AdminLayout />}>
      // TODO :<Router path='/admin/pedidos' element={<Orders />} />
      // TODO : <Router path='/admin/novo-produto' element={<CreateProducts />} />
      // TODO : <Router path='/admin/editar-produtor' element={<EditProduct />} />
      // TODO :<Router path='/admin/produtc' element={<ListProducts />} />
      // TODO :</Routes>



        <Route path='/' element={<UserLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/cardapio' element={<Menu />} />
          <Route path='/carrinho' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/complete' element={<CompletePayment />} />
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Register />} />
      </Routes>
    </>
  )
}