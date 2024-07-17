import React from 'react'
import { Button, Container, ContainerLeft, ContainerRight, Form, InputContainer, Title } from './style'
import Logo from "../../assets/Logo.svg"

export function Login() {
  return (
    <Container>
      <ContainerLeft>
        <img src={Logo} alt="logo-devBurger" />
      </ContainerLeft>

      <ContainerRight>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br />
          Acesse com seu <span>Login e senha.</span>
        </Title>

        <Form>
          <InputContainer>
            <label>Email</label>
            <input type="email" />
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" />
          </InputContainer>
          <Button>Entrar</Button>
        </Form>
        <p>Não possui conta? <a>Clique aqui.</a></p>
      </ContainerRight>
    </Container>
  )
}