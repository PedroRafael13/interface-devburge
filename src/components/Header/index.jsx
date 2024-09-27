import React from "react";
import { User, ShoppingCartSimple } from "@phosphor-icons/react";
import { Container, HeaderButton, HeaderLink, LinkContainer, Navigation, Option, Profile, Content } from "./style";

export function Header() {
  return (
    <Content>
      <Container>
        <Navigation>
          <div>
            <HeaderLink>Home</HeaderLink>
            <HeaderLink>Cardápio</HeaderLink>
          </div>
        </Navigation>
        <Option>
          <Profile>
            <User color="#333" size={24} />
            <div>
              <p>Olá, <span>Pedro</span></p>
            </div>
            <HeaderButton>Sair</HeaderButton>
          </Profile>
        </Option>
        <LinkContainer>
          <ShoppingCartSimple color="#333" size={24} />
          <HeaderLink>Carrinho</HeaderLink>
        </LinkContainer>
      </Container>
    </Content>
  )
}