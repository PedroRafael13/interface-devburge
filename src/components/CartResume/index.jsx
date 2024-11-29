import React from "react";
import { Button } from "../Button"
import { useCart } from "../../hooks/CartContext"
import { toast } from "react-toastify";
import { useState, useEffect, } from "react";
import { api } from "../../services/api"
import { formatPrice } from "../../utils/formatPrice"
import { Container } from "./style";
import { Navigate, useNavigate } from "react-router-dom";

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
      return { id: product.id, quantity: product.quantity, price: product.price }
    })

    try {
      const { data } = await api.post('/create-payment-intent', { products })

      navigation('/checkout', {
        state: data
      })
    } catch (err) {
      toast.error('alguma coisa deu errado', {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
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