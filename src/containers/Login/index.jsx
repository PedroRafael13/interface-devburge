import React from 'react'
import { Container, ContainerLeft, ContainerRight, Form, InputContainer, Title } from './style'
import Logo from "../../assets/Logo.svg"
import { Button } from '../../components/Button'

import { toast } from 'react-toastify'

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from '../../services/api'

export function Login() {
  const schema = yup
    .object({
      email: yup.string().email('Coloque seu Email').required('O Email é obrigatorio'),
      password: yup.string().min(6, 'A senha precisa de 6 caratrias').required('A senha é obrigatoria'),
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {


    const response = await toast.promise(
      api.post('/session', {
        email: data.email,
        password: data.password,
      }), {
      pending: 'Verificando seus dados',
      success: 'Tudo certo, seja bem-vindo 👌',
      error: 'alguma coisa deu errado, verifique seus dados 🤯'
    }
    )

    console.log(response)
  }

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

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <Button type="submit">Entrar</Button>
        </Form>
        <p>Não possui conta? <a>Clique aqui.</a></p>
      </ContainerRight>
    </Container>
  )
}