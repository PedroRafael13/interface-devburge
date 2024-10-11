import styled from "styled-components";

export const Container = styled.div`
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;

  .conatiner-top {
    display: grid;
    grid-gap : 10px 50%;
    grid-template-areas: 
    'title title' 
    'items price'
    'delivery delivery-tax-price';

    .title{
      grid-area: title;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 20px;
      background-color: #484848;
      color: #ffff;
      width: 100%;
      padding: 15px;
      text-align: center;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }

    .items{
      grid-area: items;
      padding-left: 20px;
    }

    .price{
      grid-area: price;
      padding-right: 20px;
    }

    .delivery{
      grid-area: delivery;
      padding-left: 20px;
    }

    .delivery-tax-price{
      grid-area: delivery-tax-price;
      padding-right: 20px;
    }
  }

  .container-bottom{
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    margin-top: 24px;
    padding: 20px;


  * {
    color: #484848;
    font-weight: 500;
  }
  }
`