import React, { useEffect, useState } from "react";
import { BackButton, Banner, CategoryButton, CategoryMenu, Container, ProductsContainer } from "./style";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../../components/CardProduct";
import { useLocation, useNavigate } from "react-router-dom";

export function Menu() {
  const navigate = useNavigate()
  const [categories, setCategory] = useState([])
  const [products, setProduct] = useState([])
  const [filteredproducts, setFilteredproductsProduct] = useState([])

  const { search } = useLocation()

  const queryParams = new URLSearchParams(search)

  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryId = +queryParams.get('categoria')

    if (categoryId) {
      return categoryId
    }

    return 0
  })


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

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredproductsProduct(products)
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === activeCategory
      )

      setFilteredproductsProduct(newFilteredProducts)
    }
  }, [products, activeCategory])


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
      <BackButton onClick={() => navigate('/')} >Voltar</BackButton>
      <CategoryMenu>
        {categories.map(category => (
          <CategoryButton
            key={category.id}
            $isActiveCategory={category.id === activeCategory}
            onClick={() => {
              navigate(
                {
                  pathname: '/cardapio',
                  search: `?categoriaId=${category.id}`,
                },
                {
                  replace: true,
                },
              )
              setActiveCategory(category.id)
            }}
          >{category.name}</CategoryButton>
        ))}
      </CategoryMenu>

      <ProductsContainer>
        {filteredproducts.map(product => (
          <CardProduct key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  )
}

