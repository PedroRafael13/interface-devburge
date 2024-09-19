import React from "react"
import { Banner, Container, Content } from "./style"
import { Category } from "../../components/CategoryCarousel"
import { OffersCarrosuel } from "../../components/OffersCarousel"

export function Home() {
  return (
    <main>
      <Banner>
        <h1>Seja Bem-Vindo!</h1>
      </Banner>
      <Container>
        <Content>
          <Category />
          <OffersCarrosuel />
        </Content>
      </Container>
    </main>
  )
}