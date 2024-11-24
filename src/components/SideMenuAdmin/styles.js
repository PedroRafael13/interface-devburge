import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    width: 320px;
    background-color: #363636;
    padding: 20px;
`

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const ListLink = styled(Link)`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 5px 10px;
    border-radius: 20px;
    gap: 20px;
    text-decoration: none;
    color: #fff;
    font-size: 23px;
    font-weight: 300;
    background-color: ${props => props.$isActive ? '#9758A6' : 'transparent'};

    &:hover{
        background-color: gray;
    }
`