import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/global'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
  width: 100vw;
  background: #ffebd9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  position: relative;
`

const Content = styled.div`
  width: 100vw;
  max-width: 1024px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Logo = styled.img`
  height: 40px;
`

const NavText = styled(Link)`
  color: ${colors.primary};
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
`

const Cart = styled(Link)`
  color: ${colors.primary};
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
`

const CartIcon = styled.span`
  font-size: 20px;
`

const Header: React.FC = () => (
  <HeaderContainer>
    <Content>
      <Left>
        <NavText to="/">Restaurantes</NavText>
      </Left>
      <Center>
        <Logo src="/logo.png" alt="eFood" />
      </Center>
      <Right>
        <Cart to="/cart">
          0 produto(s) no carrinho <CartIcon>🛒</CartIcon>
        </Cart>
      </Right>
    </Content>
  </HeaderContainer>
)

export default Header 