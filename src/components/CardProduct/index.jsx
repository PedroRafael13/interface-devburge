import React from "react";
import PropTypes from "prop-types";
import { CardImage, Container } from "./style";
import { CartButton } from "../../components/CartButton"

export function CardProduct({ product }) {
  return (
    <Container>
      <CardImage src={product.url} alt="foto-dos-produtos " />
      <div>
        <p>{product.name}</p>
        <strong>{product.currencyValue}</strong>
      </div>
      <CartButton></CartButton>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}