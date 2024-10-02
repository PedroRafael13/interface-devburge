import React from "react";
import PropTypes from "prop-types";
import { CardImage, Container } from "./style";
import { CartButton } from "../../components/CartButton"
import { useCart } from "../../hooks/CartContext";
export function CardProduct({ product }) {
  const { putProductInCart } = useCart()

  return (
    <Container>
      <CardImage src={product.url} alt="foto-dos-produtos " />
      <div>
        <p>{product.name}</p>
        <strong>{product.currencyValue}</strong>
      </div>
      <CartButton onClick={() => putProductInCart(product)}></CartButton>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}