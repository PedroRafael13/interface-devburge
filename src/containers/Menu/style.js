import styled from "styled-components";
import BannerNew from "../../assets/BannerHamburger.svg"
import Background from '../../assets/background.svg'
import { Link } from "react-router-dom";


export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f0f0f0;
  background: linear-gradient(
  rgba(225, 255, 255, 0.5),
  rgba(225, 255, 255, 0.5)
  ),
  url('${Background}');
  height: 500px;
  margin-top: -24px;
`

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 480px;
  width: 100%;
  position: relative;

  background: url('${BannerNew}') no-repeat;
  background-color: #1f1f1f;
  background-position: center;
  background-size: cover;

  h1{
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    line-height: 65px;
    position: absolute;
    color: #fff;

    right: 20%;
    top: 30%;

    span{
      display: flex;
      color: #fff;
      font-size: 20px;
    }
  }
`

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 30px;
`

export const BackButton = styled(Link)`
    text-decoration:none;
    position: fixed;
    margin-top: 10px;
    margin: 20px;
    background-color: ${props => props.theme.purple};
    color: #fff;
    font-weight: 200;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 30px;

    &:hover {
      background-color: #6f3576;
    }
`

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
    color: ${props => props.$isActiveCategory ? props => props.theme.purple : '#9a9a9a'};
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  border-bottom: ${(props) => props.$isActiveCategory && '3px solid #9758a6'};
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  padding: 40px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto 0;
`