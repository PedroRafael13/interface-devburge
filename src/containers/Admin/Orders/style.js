import styled from "styled-components";
import ReactSelect from 'react-select'

export const Container = styled.div`
`

export const ProductsImg = styled.img`
    width: 100px;
    border-radius: 10px;
`

export const ReactSelectStyle = styled(ReactSelect)`
    width: 250px;

    .css-13cymwt-control{
        cursor: pointer;
    }
`

export const Menu = styled.div`
    display: flex;
    gap: 50px;
    justify-content: center;
    margin: 20px 0;
`

export const LinkMenu = styled.a`
    font-size: 20px;
    cursor: pointer;
    padding: 5px 10px;
    background-color: ${props => props.$isActive ? '${props => props.theme.purple}' : 'transparent'};
    color: ${props => props.$isActive ? '#fff' : '#000'};
    border-radius: 20px;
    
    &:hover{
        outline: 1px solid ${props => props.theme.purple};
    }
`