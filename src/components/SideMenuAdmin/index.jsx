import { Container, NavLink, NavLinkContainer, Footer } from './styles';
import React from 'react'
import Logo from '../../assets/Logo.svg'
import { navLinks } from './navLinks';
import { SignOut } from '@phosphor-icons/react/dist/ssr';
import { UserUser } from '../../hooks/UserContext';
import { useResolvedPath } from 'react-router-dom';


export const SideMenuAdmin = () => {
  const { logout } = UserUser()
  const { pathname } = useResolvedPath()

  return (
    <Container>
      <img src={Logo} alt="Logo-DevBurger" />
      <NavLinkContainer>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            $isActive={pathname === link.path}
          >
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </NavLinkContainer>
      <Footer>
        <NavLink to='/login' onClick={logout}>
          <SignOut />
          <span>Sair</span>
        </NavLink>
      </Footer>
    </Container>
  );
};