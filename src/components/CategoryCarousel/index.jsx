import React, { useEffect, useState } from 'react'
import { api } from "../../services/api"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { CategoryButton, Container, ContainerItems, Title } from './style';
import { useNavigate } from 'react-router-dom';

export function Category() {
  const navigate = useNavigate()

  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategory() {
      const { data } = await api.get('/categories')

      setCategories(data)
    }
    loadCategory()
  }, [])

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Container>
      <Title>Categorias</Title>

      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisbile={false} git
        itemClass='carousel-items'
      >
        {categories.map(category => (
          <ContainerItems key={category.id} imageUrl={category.url}>
            <CategoryButton
              onClick={() => {
                navigate(
                  {
                    pathname: '/cardapio',
                    search: `?categoriaId=${category.id}`,
                  },
                )
              }}
            >
              {category.name}
            </CategoryButton>
          </ContainerItems>
        ))}
      </Carousel>
    </Container>
  )
}