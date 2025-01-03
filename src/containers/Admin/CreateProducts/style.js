import styled from 'styled-components'

import { Button } from '../../../components/Button';

export const Container = styled.div`
   display: flex
;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%;
    height: 100vh;
    background-color: #f0f0f0;
    overflow-y: auto;


    form{
        display: flex;
        flex-direction: column;
        width: 450px;
        background-color: #363636;
        border-radius: 20px;
        padding: 30px;
        gap: 5px;
    }

    .error{
        color: red;
        font-weight: normal;
        height: 10px;
        margin-bottom: 30px;
    }

`

export const Label = styled.p`
    color: #fff;
    font-size: 18px;
`

export const LabelUpload = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    border: 1px dashed #fff;
    border-radius: 10px;
    padding: 10px;

    
    input{
        opacity: 0;
        width: 1px;
    }
`

export const Input = styled.input`
    height: 40px;
    border-radius: 10px;
    border: none;
    padding-left: 10px;
`

export const SubmitButton = styled(Button)`
    margin-top: 30px;
`