import styled from 'styled-components'
import BannerHome from '../../assets/bannerHome.svg'
import Background from '../../assets/background.svg'

export const Banner = styled.div`
  background: url('${BannerHome}');
  background-size: cover;
  background-position: center;
  height: 480px;
  margin-top: -24px;


  h1{
    font-family: "Road Rage", sans-serif;
    font-size: 48px;
    color: #f4f4f4;
    position: absolute;
    right: 20%;
    top: 10%;
  }
`

export const Container = styled.section`
  background: linear-gradient(
  rgba(225, 255, 255, 0.5),
  rgba(225, 255, 255, 0.5)
  ),
  url('${Background}');
  height: 50vw;
`

export const Content = styled.div`
  padding-bottom: 70px;
`