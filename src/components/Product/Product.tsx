/* eslint-disable @next/next/no-img-element */
import { ShoppingBagOpen } from '@phosphor-icons/react'

import styled from 'styled-components'

const ContainerProducts = styled.div`
  margin: 0 auto;
  max-width: 938px;
  //height: 601px;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex: 1;
`

const ContainerCard = styled.div`
  width: 218px;
  height: 285px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
`

const ContainerImage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 18px;
`

const ContainerTitlePrice = styled.div`
  display: flex;
  align-items: center;
  padding: 0 14px;
`

const Title = styled.span`
  font-weight: 400;
  font-size: 16px;
`

const Price = styled.span`
  background-color: #373737;
  font-weight: 700;
  font-size: 15px;
  color: #ffffff;
  padding: 5px 7px;
  border-radius: 8px;
`

const Description = styled.span`
  font-weight: 300;
  font-size: 10px;
  padding: 0 14px;
`

const Footer = styled.div`
  width: 100%;
  height: 32px;
  padding: 7px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 0 0 8px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  > span {
    font-weight: 600;
    font-size: 14px;
    color: #ffffff;
  }
`
const FooterContainer = styled.div`
  height: 34px;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`

export default function Products() {
  return (
    <>
      <ContainerProducts>
        <ContainerCard>
          <ContainerImage>
            <img src={'/products/apple-watch.png'} alt="" />
          </ContainerImage>
          <ContainerTitlePrice>
            <Title>Apple Watch Series 4 GPS</Title>
            <Price>R$399</Price>
          </ContainerTitlePrice>
          <Description>
            Redesigned from scratch and completely revised.
          </Description>
          <Footer>
            <ShoppingBagOpen color="#FFFFFF" size={16} />
            <span>COMPRAR</span>
          </Footer>
        </ContainerCard>
        <ContainerCard>
          <ContainerImage>
            <img src={'/products/apple-watch.png'} alt="" />
          </ContainerImage>
          <ContainerTitlePrice>
            <Title>Apple Watch Series 4 GPS</Title>
            <Price>R$399</Price>
          </ContainerTitlePrice>
          <Description>
            Redesigned from scratch and completely revised.
          </Description>
          <Footer>
            <ShoppingBagOpen color="#FFFFFF" size={16} />
            <span>COMPRAR</span>
          </Footer>
        </ContainerCard>
        <ContainerCard>
          <ContainerImage>
            <img src={'/products/apple-watch.png'} alt="" />
          </ContainerImage>
          <ContainerTitlePrice>
            <Title>Apple Watch Series 4 GPS</Title>
            <Price>R$399</Price>
          </ContainerTitlePrice>
          <Description>
            Redesigned from scratch and completely revised.
          </Description>
          <Footer>
            <ShoppingBagOpen color="#FFFFFF" size={16} />
            <span>COMPRAR</span>
          </Footer>
        </ContainerCard>
        <ContainerCard>
          <ContainerImage>
            <img src={'/products/apple-watch.png'} alt="" />
          </ContainerImage>
          <ContainerTitlePrice>
            <Title>Apple Watch Series 4 GPS</Title>
            <Price>R$399</Price>
          </ContainerTitlePrice>
          <Description>
            Redesigned from scratch and completely revised.
          </Description>
          <Footer>
            <ShoppingBagOpen color="#FFFFFF" size={16} />
            <span>COMPRAR</span>
          </Footer>
        </ContainerCard>
        <ContainerCard>
          <ContainerImage>
            <img src={'/products/apple-watch.png'} alt="" />
          </ContainerImage>
          <ContainerTitlePrice>
            <Title>Apple Watch Series 4 GPS</Title>
            <Price>R$399</Price>
          </ContainerTitlePrice>
          <Description>
            Redesigned from scratch and completely revised.
          </Description>
          <Footer>
            <ShoppingBagOpen color="#FFFFFF" size={16} />
            <span>COMPRAR</span>
          </Footer>
        </ContainerCard>
        <ContainerCard>
          <ContainerImage>
            <img src={'/products/apple-watch.png'} alt="" />
          </ContainerImage>
          <ContainerTitlePrice>
            <Title>Apple Watch Series 4 GPS</Title>
            <Price>R$399</Price>
          </ContainerTitlePrice>
          <Description>
            Redesigned from scratch and completely revised.
          </Description>
          <Footer>
            <ShoppingBagOpen color="#FFFFFF" size={16} />
            <span>COMPRAR</span>
          </Footer>
        </ContainerCard>
        <ContainerCard>
          <ContainerImage>
            <img src={'/products/apple-watch.png'} alt="" />
          </ContainerImage>
          <ContainerTitlePrice>
            <Title>Apple Watch Series 4 GPS</Title>
            <Price>R$399</Price>
          </ContainerTitlePrice>
          <Description>
            Redesigned from scratch and completely revised.
          </Description>
          <Footer>
            <ShoppingBagOpen color="#FFFFFF" size={16} />
            <span>COMPRAR</span>
          </Footer>
        </ContainerCard>
        <ContainerCard>
          <ContainerImage>
            <img src={'/products/apple-watch.png'} alt="" />
          </ContainerImage>
          <ContainerTitlePrice>
            <Title>Apple Watch Series 4 GPS</Title>
            <Price>R$399</Price>
          </ContainerTitlePrice>
          <Description>
            Redesigned from scratch and completely revised.
          </Description>
          <Footer>
            <ShoppingBagOpen color="#FFFFFF" size={16} />
            <span>COMPRAR</span>
          </Footer>
        </ContainerCard>
      </ContainerProducts>
      <FooterContainer>
        <span>MKS sistemas © Todos os direitos reservados</span>
      </FooterContainer>
    </>
  )
}
