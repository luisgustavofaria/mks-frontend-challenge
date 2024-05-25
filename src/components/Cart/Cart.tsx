/* eslint-disable @next/next/no-img-element */
import { X } from '@phosphor-icons/react'
import styled from 'styled-components'

const CartContainer = styled.div`
  background-color: ${(props) => props.theme.primary};

  height: 800px;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;

  @media (max-width: 768px) {
    max-width: 485px;
  }
`

const CartHeader = styled.div`
  padding: 50px 50px 0px 50px;

  display: flex;

  justify-content: space-between;

  > span {
    font-weight: 700;
    font-size: 27px;
    color: #ffffff;
    width: 170px;
  }
  @media (max-width: 768px) {
    span {
      width: 170px;
    }
  }
`

const Close = styled.button`
  width: 32px;
  height: 32px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 999px;

  border: none;
  cursor: pointer;
  font-size: 27px;
  color: #000000;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ItemContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1;
  padding: 0 50px;
  max-height: 400px; /* Defina a altura máxima que desejar */
  overflow-y: auto; /* Adiciona a rolagem vertical quando necessário */

  @media (max-width: 768px) {
    align-items: center;
    gap: 15px;
  }
`

const Item = styled.div`
  background-color: #ffffff;
  width: 385px;
  height: 101px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 25px;
  gap: 30px;

  img {
    width: 50px;
  }

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 220px;
    flex-direction: column;
    gap: 10px;

    img {
      width: 80px;
    }
  }
`

const Title = styled.span`
  font-weight: 400;
  font-size: 13px;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const QuantityPriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`

const QuantityContainer = styled.div`
  background-color: #ffffff;

  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;

  > span {
    font-weight: 400;
    font-size: 5px;
    color: #000000;
    display: flex;
    align-self: flex-start;
    margin-bottom: 4px;
  }

  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`
const Quantity = styled.div`
  background-color: #ffffff;
  width: 50px;
  height: 19px;
  border-radius: 4px;
  display: flex;
  align-items: center;

  border: 0.3px solid #bfbfbf;

  span {
    font-weight: 400;
    font-size: 12px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span:first-child {
    border-right: 0.3px solid #bfbfbf;
    height: 11px;
  }

  span:last-child {
    border-left: 0.3px solid #bfbfbf;
    height: 11px;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 35px;

    span {
      font-size: 24px;
    }
    span:first-child {
      height: 20px;
    }

    span:last-child {
      height: 20px;
    }
  }
`

const Price = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 15px;
    background-color: #373737;
    color: #ffffff;
    width: 84px;
    height: 34px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Footer = styled.div`
  div:first-child {
    padding: 50px 50px 30px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    padding: 30px 20px 30px 20px;
  }

  span {
    font-weight: 700;
    font-size: 28px;
    color: #ffffff;
  }
`
interface CartProps {
  onClose: () => void
}

const Cart = ({ onClose }: CartProps) => {
  return (
    <CartContainer>
      <CartHeader>
        <span>Carrinho de compras</span>
        <Close onClick={onClose}>
          <X size={16} color="#ffffff" />
        </Close>
      </CartHeader>
      <ItemContainer>
        <Item>
          <div>
            <img src={'/products/apple-watch.png'} alt="" />
          </div>
          <Title>Apple Watch Series 4 GPS</Title>
          <QuantityPriceContainer>
            <QuantityContainer>
              <span>Qtd</span>

              <Quantity>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </Quantity>
            </QuantityContainer>
            <Price>R$399</Price>
          </QuantityPriceContainer>
        </Item>
        <Item>
          <div>
            <img src={'/products/apple-watch.png'} alt="" />
          </div>
          <Title>Apple Watch Series 4 GPS</Title>
          <QuantityPriceContainer>
            <QuantityContainer>
              <span>Qtd</span>

              <Quantity>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </Quantity>
            </QuantityContainer>
            <Price>R$399</Price>
          </QuantityPriceContainer>
        </Item>
        <Item>
          <div>
            <img src={'/products/apple-watch.png'} alt="" />
          </div>
          <Title>Apple Watch Series 4 GPS</Title>
          <QuantityPriceContainer>
            <QuantityContainer>
              <span>Qtd</span>

              <Quantity>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </Quantity>
            </QuantityContainer>
            <Price>R$399</Price>
          </QuantityPriceContainer>
        </Item>
      </ItemContainer>
      <Footer>
        <div>
          <span>Total</span>
          <span>R$798</span>
        </div>
        <div>
          <span>Finalizar Compra</span>
        </div>
      </Footer>
    </CartContainer>
  )
}

export default Cart
