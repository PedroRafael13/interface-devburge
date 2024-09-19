import React from "react";
import Cart from "../../assets/CartButton.svg"
import { ContainerButton } from "./style";

export function CartButton({ ...props }) {
  return (
    <ContainerButton {...props}>
      <img src={Cart} />
    </ContainerButton>
  )
}