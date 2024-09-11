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

export function Login() {

  const navigation = useNavigate()

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
    try {
      const { status, data } = await api.post('session', {
        email: elements.email,
        password: elements.password
      },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Login efetuado com sucesso')

        setTimeout(() => {
          navigation('/')
        }, 2000)
      } else if (status === 401) {
        toast.error('Verifique seu e-mail ou senha!')
      } else {
        throw new Error()
      }

      putUserData(data)
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente')
      console.log(err)
    }
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