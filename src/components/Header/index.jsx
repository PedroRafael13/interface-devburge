import React from "react";
import { User, ShoppingCartSimple } from "@phosphor-icons/react";
import { Container, HeaderButton, HeaderLink, LinkContainer, Navigation, Option, Profile, Content } from "./style";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { UserUser } from "../../hooks/UserContext";


export function Header() {
  const navigate = useNavigate()
  const { logout, userInfo } = UserUser()
  const { pathname } = useResolvedPath()

  function logoutUser() {
    logout()
    navigate("/login")
  }

  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink to="/" $isActive={pathname === '/'}>Home</HeaderLink>
            <hr></hr>
            <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>Cardápio</HeaderLink>
          </div>
        </Navigation>
        <Option>
          <Profile>
            <User color="#333" size={24} />
            <div>
              <p>
                Olá,<span>{userInfo.name}</span>
              </p>
              <HeaderButton onClick={logoutUser}>Sair</HeaderButton>
            </div>
          </Profile>
          <LinkContainer>
            <ShoppingCartSimple color="#333" size={24} />
            <HeaderLink>Carrinho</HeaderLink>
          </LinkContainer>
        </Option>
      </Content>
    </Container>
  )
}