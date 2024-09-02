import React from "react"
import { Banner, Container, Content } from "./style"
import { Category } from "../../components/CategoryCarousel/style"

export function Home() {
  return (
    <main>
      <Banner>
        <h1>Seja Bem-Vindo!</h1>
      </Banner>
      <Container>
        <Content>
          <Category />
        </Content>
      </Container>
    </main>
  )
}