import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles/global'

const HeaderContainer = styled.header`
  background-image: url('/Vector.svg');
  background-size: cover;
  background-position: center;
  padding: 40px 0;
  position: relative;
  background-color: ${colors.secondary};

  @media (max-width: 767px) {
    padding: 32px 0;
  }
`

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 1023px) {
    justify-content: center;
    gap: 32px;
  }
`

const Logo = styled.img`
  height: 57px;
`

const RestaurantLink = styled(Link)`
  color: ${colors.primary};
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;

  @media (max-width: 1023px) {
    display: none;
  }
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
        <RestaurantLink to="/">Restaurantes</RestaurantLink>
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