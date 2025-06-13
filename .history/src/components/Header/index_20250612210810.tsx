import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles/global'

const HeaderContainer = styled.header`
  background-image: url('/Hero.png');
  background-size: cover;
  background-position: center;
  padding: 40px 0;
`

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  height: 57px;
`

const CartButton = styled(Link)`
  color: ${colors.primary};
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
`

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Container>
        <Link to="/">
          <Logo src="/logo.png" alt="EFOOD" />
        </Link>
        <CartButton to="/carrinho">
          <span>0 - produto(s)</span>
          <span>R$ 0,00</span>
        </CartButton>
      </Container>
    </HeaderContainer>
  )
}

export default Header 