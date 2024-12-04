import styled from "styled-components";

export const Container = styled.div`
  .carousel-items{
    padding-right: 48px;
  }
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: ${props => props.theme.purple};
  padding-bottom: 18px;
  position: relative;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color:${props => props.theme.purple};
    left: calc(50% - 25px);
  }
`

export const ContainerItems = styled.div`
  background: url('${props => props.imageUrl}');
  background-position: center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  width: 100%;
  height: 200px;
`

export const CategoryButton = styled.button`
    color :#ffff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 32px;
    font-weight: 500;
    text-decoration: none;
    margin-top: 50px;

    :hover{
      background-color:${props => props.theme.purple};
    }
`