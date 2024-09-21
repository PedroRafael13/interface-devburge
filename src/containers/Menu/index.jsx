import React, { useEffect, useState } from "react";
import { Banner, CategoryButton, CategoryMenu, Container, ProductsContainer } from "./style";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../../components/CardProduct";

export function Menu() {
  const [categories, setCategory] = useState([])
  const [products, setProduct] = useState([])

  useEffect(() => {
    async function loadCategory() {
      const { data } = await api.get('/categories')

      const newCategory = [{ id: 0, name: "Todas" }, ...data]

      setCategory(newCategory)
    }

    async function loadProducts() {
      const { data } = await api.get('/products')

      const newProduct = data.map((product) => ({
        currencyValue: formatPrice(product.price), ...product
      }))


      setProduct(newProduct)
    }

    loadCategory()
    loadProducts()
  }, [])


  return (
    <Container>
      <Banner>
        <h1>
          O MELHOR
          <br />
          HAMBURGUER
          <br />
          ESTA AQUI
          <span>Esse cardápio está irresistível!</span>
        </h1>
      </Banner>
      <CategoryMenu>
        {categories.map(category => (
          <CategoryButton key={category.id}>{category.name}</CategoryButton>
        ))}
      </CategoryMenu>

      <ProductsContainer>
        {products.map(product => (
          <CardProduct key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  )
}