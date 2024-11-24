import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    width: 100%;
    background: #efefef;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background-color: #efefef;
    min-height: 100vh;
    padding: 30px;

    .header{
            background-color: #363636;
            color: #fff;
            font-size: 16px;
            font-weight: 600;
        }
`