import React from "react";
import { Banner, CategoryMenu, Container, ProductsContainer } from "./style";

export function Menu() {
  return (
    <Container>
      <Banner>
        <h1>
          O MELHOR
          <br />
          HAMBURGUER
          <br />
          ESTA AQUI
          <span>Esse cardápio está irresistível!</span>
        </h1>
      </Banner>
      <CategoryMenu></CategoryMenu>
      <ProductsContainer></ProductsContainer>
    </Container>
  )
}