import React from "react";
import { Button } from "../Button"
import { useCart } from "../../hooks/CartContext"
import { toast } from "react-toastify";
import { useState, useEffect, } from "react";
import { api } from "../../services/api"
import { formatPrice } from "../../utils/formatPrice"
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(500)

  const { cartProducts, clearCart } = useCart()

  const navigation = useNavigate()

  useEffect(() => {
    const sumAllSome = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(sumAllSome)
  }, [cartProducts])

  const submitOrder = async () => {
    const products = cartProducts.map((product) => {
      return { id: product.id, quantity: product.quantity }
    })

    try {
      const { status } = await api.post('/order', {
        products
      }, {
        validateStatus: () => true
      })

      if (status === 200 || status === 201) {
        clearCart()
        setTimeout(() => {
          navigation('/')
        }, 2000)

        toast.success("Pedido realizado com sucesso!")

      } else if (status === 409 || status === 400) {
        toast.error("Alguma coisa deu errado!")
      } else {
        throw Error()
      }
    } catch (errror) {
      toast.error("O sistema caiu, tente novamente, mais tarde")
    }
  }

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Preço Final</h2>
          <p className="items">Itens</p>
          <p className="price">{formatPrice(finalPrice)}</p>
          <p className="delivery">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{formatPrice(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button onClick={submitOrder} >Finalizar Pedido</Button>
    </div>
  )
}