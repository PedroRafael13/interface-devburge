import React from 'react'
import { Container, ContainerLeft, ContainerRight, Form, InputContainer, Title } from './style'
import Logo from "../../assets/Logo.svg"
import { Button } from '../../components/Button'

import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from '../../services/api'
import { Link } from 'react-router-dom'

export function Register() {
  const navigation = useNavigate()

  const schema = yup
    .object({
      name: yup.string().required('O nome é obrigatorio'),
      email: yup.string().email('Coloque seu Email').required('O Email é obrigatorio'),
      password: yup.string().min(6, 'A senha precisa de 6 caratrias').required('A senha é obrigatoria'),
      confirPassword: yup.string().oneOf([yup.ref('password')], 'As senhas devem iguais')
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
    try {
      const { status } = await api.post('/users', {
        name: data.name,
        email: data.email,
        password: data.password,
      }, {
        validateStatus: () => true
      })

      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigation('/login')
        }, 2000)

        toast.success("Conta realizada com sucesso!")

      } else if (status === 409 || status === 400) {
        toast.error("O email já está existe! faça o seu login")
      } else {
        throw Error()
      }
    } catch (errror) {
      toast.error("O sistema caiu, tente novamente, mais tarde")
    }
  }

  return (
    <Container>
      <ContainerLeft>
        <img src={Logo} alt="logo-devBurger" />
      </ContainerLeft>

      <ContainerRight>
        <Title>
          Criar Conta
          <br />
        </Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <input type="text" {...register("name")} />
            <p>{errors?.name?.message}</p>
          </InputContainer>

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

          <InputContainer>
            <label>Confirmar senha</label>
            <input type="password" {...register("confirPassword")} />
            <p>{errors?.confirPassword?.message}</p>
          </InputContainer>
          <Button type="submit">Criar Conta</Button>
        </Form>
        <p>possui conta? <Link to='/login'>Clique aqui.</Link></p>
      </ContainerRight>
    </Container>
  )
}