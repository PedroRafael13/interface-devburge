import { UserUser } from '../../hooks/UserContext';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import { SideMenuAdmin } from '../../components/SideMenuAdmin';
import { Orders } from './Orders';
import { ListProducts } from './ListProducts';
import { CreateProducts } from './CreateProducts';
import { EditProduct } from './EditProduct';
import paths from '../../contants/paths';
import { useLocation } from 'react-router-dom';

import { Container, Content } from './style';

export const Admin = () => {
  const { pathname } = useLocation();

  const {
    userInfo: { admin },
  } = UserUser();

  const navigate = useNavigate();

  if (!admin) {
    navigate('/');
  }

  return (
    <Container>
      <SideMenuAdmin pathname={pathname} />
      <Content>
        {pathname === paths.Order && <Orders />}
        {pathname === paths.Product && <ListProducts />}
        {pathname === paths.NewProduct && <CreateProducts />}
        {pathname === paths.EditProduct && <EditProduct />}
      </Content>
    </Container>
  );
};