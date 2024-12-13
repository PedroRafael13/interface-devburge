import React from 'react'
import { Container, ContainerLeft, ContainerRight, Form, InputContainer, Title } from './style'
import Logo from "../../assets/Logo.svg"
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from '../../services/api'
import { Link } from 'react-router-dom'
import { UserUser } from '../../hooks/UserContext'

export function Login() {

  const navigation = useNavigate()

  const { putUserData } = UserUser()

  const schema = yup.object({
    email: yup.string().email('Coloque seu Email').required('O Email é obrigatorio'),
    password: yup.string().min(6, 'A senha precisa de 6 caratrias').required('A senha é obrigatoria'),
  }).required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (elements) => {
    const { data: userData } =
      await toast.promise(
        api.post("/session", {
          email: elements.email,
          password: elements.password,
        }),
        {
          pending: "verificando seus dados",
          success: {
            render() {
              setTimeout(() => {
                if (DevBurgerdata.admin) {
                  navigation('/admin/pedidos')
                } else {
                  navigation('/')
                }
              }, 2000)
              return "seja Bem-vindo"
            },
          },
          error: "Email ou senha Incorretos"
        },
      )

    putUserData(userData)

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
        <p>Não possui conta? <Link to='/cadastro'>Clique aqui.</Link></p>
      </ContainerRight>
    </Container>
  )
}