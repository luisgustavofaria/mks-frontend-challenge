import { ShoppingCart } from '@phosphor-icons/react';
import styled from 'styled-components';

const HeaderBackGround = styled.header`
  background-color: ${(props) => props.theme.primary};
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  height: 101px;
  padding: 28px 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

const Title01 = styled.h1`
  font-weight: 600;
  font-size: 40px;
  color: #ffffff;
`;

const Title02 = styled.h2`
  font-weight: 300;
  font-size: 20px;
  color: #ffffff;
`;

const CartButton = styled.div`
  width: 90px;
  height: 45px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export default function Header() {
  return (
    <HeaderBackGround>
      <HeaderContainer>
        <Logo>
          <Title01>MKS</Title01>
          <Title02>Sistemas</Title02>
        </Logo>
        <CartButton>
          <ShoppingCart size={20} />
          <span>0</span>
        </CartButton>
      </HeaderContainer>
    </HeaderBackGround>
  );
}
