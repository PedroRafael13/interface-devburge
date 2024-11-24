import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserUser } from '../../hooks/UserContext';
import { useCart } from '../../hooks/CartContext';
import {
  Container,
  Navigation,
  Options,
  HeaderLink,
  Profile,
  ProfileName,
  Logout,
  Cart,
  CartLink,
  CartBadge,
  AdminConfig,
} from './style';
import Logo from '../../assets/Logo.svg';
import AdminConfigIcon from '../../assets/admin-config.svg';
import ProfileImage from '../../assets/profile.svg';
import CartImage from '../../assets/cart.svg';

export const Header = () => {
  const navigate = useNavigate();

  const { cartProducts } = useCart();
  const { userInfo: { name, admin }, logout } = UserUser();

  // Função para fazer logout
  const logoutUser = () => {
    logout();
    navigate('/login');
  };

  // Função para navegar até o carrinho
  const userCart = () => {
    navigate('/carrinho');
  };

  // Função para navegação de administração (caso o usuário seja admin)
  const navigateAdminConfig = () => {
    navigate('/pedidos');
  };

  return (
    <Container>
      <Navigation>
        <img src={Logo} alt="logo" />
        <div>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/menu?categoria=0">Cardápio</HeaderLink>
          <HeaderLink to="/contato">Contatos</HeaderLink>
        </div>
      </Navigation>
      <Options>
        <Profile>
          <img src={ProfileImage} alt="profile" />
          <div>
            <p>
              Olá, <ProfileName>{name}</ProfileName>
            </p>
            <Logout onClick={logoutUser}>Sair</Logout>
          </div>
        </Profile>
        <Cart>
          <img src={CartImage} alt="carrinho" />
          <CartBadge>{cartProducts.length}</CartBadge>
          <CartLink onClick={userCart}>Carrinho</CartLink>
        </Cart>
        {admin && (
          <AdminConfig onClick={navigateAdminConfig}>
            <img src={AdminConfigIcon} alt="Admin Config" />
            Administração
          </AdminConfig>
        )}
      </Options>
    </Container>
  );
};
