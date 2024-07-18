import styled from "styled-components";
import BackgroundLogo from "../../assets/background-logo.svg"
import Background from "../../assets/background.png"


export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`

export const ContainerLeft = styled.div`
  background: url('${BackgroundLogo}');
  background-size: cover;
  background-position: center;

  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 50%;

  img {
    width: 80%;
  }
`

export const ContainerRight = styled.div`
  background: url('${Background}');
  background-color: #1e1e1e;
  opacity: 0,5;

  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 50%;

  p{
    color : #fff;
    font-size: 18px;
    font-weight: 800;

    a{
      text-decoration: underline;
    }
  }
`

export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  font-size: 40;
  color : #FFFFFF;

  span {
    color : #9758A6;
    font-family: "Road Rage", sans-serif;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color : #ffff;
  }
`