import React from "react";
import { Table } from "../Table";
import { useCart } from "../../hooks/CartContext"

export function CartItems() {
  const { cartProducts, decreaseProduct, increaseProduct } = useCart

  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th>Itens</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.body>
        {cartProducts?.length ? (
          cartProducts.map(product => (
            <Table.Tr key={product.id}>
              <Table.Td>
                <img src={product.url} alt="imagem do produto" />
              </Table.Td>
              <Table.Td>{product.name}</Table.Td>
              <Table.Td>{product.currencyValue}</Table.Td>
              <Table.Td>{product.quantity}</Table.Td>
            </Table.Tr>
          ))
        ) : <div>Carrinho Vazio</div>}
      </Table.body>
    </Table.Root>
  )
}