import React from "react";
import { Button } from "../Button"
import { useCart } from "../../hooks/CartContext"
import { Container } from "./style";

export function CartResume() {
  const { putProductInCart } = useCart()

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Preço Final</h2>
          <p className="items">Item</p>
          <p className="price">RS$ 20,00</p>
          <p className="delivery">Taxa de entrega</p>
          <p className="delivery-tax-price">R$ 10,00</p>
        </div>

        <div className="container-bottom">
          <p>Total</p>
          <p>RS$ 25,00</p>
        </div>
      </Container>
      <Button>Finalizar Pedido</Button>
    </div>
  )
}