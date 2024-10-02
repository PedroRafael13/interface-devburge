import React from "react";
import Logo from "../../assets/Logo 2.png"
import { Banner, Container, Content, Title } from "./style";

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt="Logo-Img" />
      </Banner>
      <Title>Checkout - Pedido</Title>
      <Content>

      </Content>
    </Container>
  )
}