import styled from "styled-components";
import { Link } from "react-router-dom";

// Container principal
export const Container = styled.header`
    background: #1F1F1F;
    color: #fff;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;

`;

// Navegação (Links principais)
export const Navigation = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;

// Opções (Perfil, Carrinho, Administração)
export const Options = styled.div`
    display: flex;
    align-items: center;
    gap: 60px;
`;

// Link do cabeçalho (com estilo ativo)
export const HeaderLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-weight: 400;
    padding: 0 30px;
    border-right: 1px solid #fff;

    &:last-child {
        border: none;
    }

    &:hover {
        color: #9758A6;
    }
`;

// Estilo do Perfil (imagem e nome)
export const Profile = styled.div`
    display: flex;
    font-weight: 300;

    img {
        width: 30px;
        margin-right: 10px;
    }
`;

// Nome do usuário
export const ProfileName = styled.span`
    color: #9758A6;
    font-weight: 500;
`;

// Estilo do botão de logout
export const Logout = styled(Link)`
    color: #9E1C00;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
`;

// Estilo do Carrinho
export const Cart = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    img {
        width: 40px;
    }
`;

// Link para o carrinho
export const CartLink = styled(Link)`
    margin-left: 10px;
    text-decoration: none;
    color: #fff;

    &:hover {
        color: #9758A6;
    }
`;

// Badge do carrinho (quantidade de produtos)
export const CartBadge = styled.span`
    position: absolute;
    top: -10px;
    right: 75px;
    background-color: #ff0000;
    color: #fff;
    border-radius: 50%;
    padding: 4px 10px;
    font-size: 12px;
    font-weight: bold;
`;

// Estilo do botão de administração (para admin)
export const AdminConfig = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #fff;

    &:hover {
        color: #9758A6;
    }

    img {
        width: 40px;
    }
`;
