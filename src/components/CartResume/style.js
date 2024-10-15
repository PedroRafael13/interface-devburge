import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;

  .container-top{
    display: grid;
    grid-gap:10px 50%;
    grid-template-areas: 'title title'
    'items price'
    'delivery delivery-tax-price';

    .title{
      grid-area: title;
      font-size: 20px;
      font-weight: 700;
      background-color: #484848;
      color: #fff;
      width:100%;
      padding: 15px;
      text-align: center;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }

    .items {
      grid-area: items;
      padding-left: 15px;
    }

    .price {
      grid-area: price;
      padding-right: 15px;
    }

    .delivery{
      grid-area:delivery;
      padding-left: 15px;
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
      padding-right: 15px;
    }
  }

  .container-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    margin-top: 24px;
    padding: 15px;
  }

  *{
    font-weight: 700;
  }
`