import React, { useEffect, useState } from 'react'
import { api } from "../../services/api"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { Container, Title } from './style';
import { CardProduct } from '../CardProduct';
import { formatPrice } from '../../utils/formatPrice';

export function OffersCarrosuel() {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('/products')

      const onlyOffers = data.filter((product) => product.offer).
        map((product) => ({
          currencyValue: formatPrice(product.price), ...product
        }))


      setOffers(onlyOffers)
    }

    loadProducts()
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
      <Title>Ofertas do Dia</Title>

      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisbile={false}
        itemClass='carousel-items'
      >
        {offers.map(products => (
          <CardProduct key={products.id} product={products} />
        ))}
      </Carousel>
    </Container>
  )
}