import React from "react";
import { Table } from "../Table";
import { useCart } from "../../hooks/CartContext"
import { formatPrice } from "../../utils/formatPrice"
import TrashIcon from "../../assets/trash.svg"
import { ButtonGroup, EmptyCart, ProductImage, Trash } from "./style";

export function CartItems() {
  const { cartProducts, decreaseProduct, increaseProduct, deleteProduct } = useCart()

  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th>Itens</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.body>
        {cartProducts?.length ? (
          cartProducts.map(product => (
            <Table.Tr key={product.id}>
              <Table.Td>
                <ProductImage src={product.url} alt="imagem do produto" />
              </Table.Td>
              <Table.Td>{product.name}</Table.Td>
              <Table.Td>{product.currencyValue}</Table.Td>
              <Table.Td>
                <ButtonGroup>
                  <button onClick={() => decreaseProduct(product.id)}>-</button>
                  {product.quantity}
                  <button onClick={() => increaseProduct(product.id)}>+</button>
                </ButtonGroup>
              </Table.Td>
              <Table.Td>
                <div style={{ fontWeight: 'bold' }}>
                  {formatPrice(product.quantity * product.price)}
                </div>
              </Table.Td>
              <Table.Td>
                <Trash src={TrashIcon} alt="lixeira" onClick={() => deleteProduct(product.id)} />
              </Table.Td>
            </Table.Tr>
          ))
        ) : <EmptyCart>Carrinho Vazio</EmptyCart>}
      </Table.body>
    </Table.Root>
  )
}